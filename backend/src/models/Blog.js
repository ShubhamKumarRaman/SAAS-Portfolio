const mongoose = require('mongoose')
const slugify = require('slugify')
const { marked } = require('marked')

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            unique: true,
        },
        content: {
            type: String,
            required: true
        },
        renderedContent: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        tags: [
            {
                type: String
            }
        ],
        published: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
)

//Generate Slug and render markdown
blogSchema.pre("save", function () {
    // Slug
    if (this.isModified('title')) {
        this.slug = slugify(this.title, {
            lower: true,
            strict: true
        })
    }

    // Markdown -> HTML
    if (this.isModified('content')) {
        this.renderedContent = marked.parse(this.content ?? '')
    }

})

module.exports = mongoose.model("Blog", blogSchema);