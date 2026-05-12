const mongoose = require('mongoose')
const slugify = require('slugify')
const { marked } = require('slugify')

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
blogSchema.pre("save", function (next) {
    //Slug
    this.slug = slugify(this.title, {
        lower: true,
        strict: true
    })

    //markdown to HTML
    this.renderedContent = marked(this.content);

    next();
})

module.exports = mongoose.model("Blog", blogSchema);