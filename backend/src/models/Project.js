const mongoose = require('mongoose')
const slugify = require('slugify')

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        techStack: [
            {
                type: String,
            }
        ],
        githubLink: {
            type: String,
        },
        liveLink: {
            type: String
        },
        images: [
            {
                type: String
            }
        ],
        featured: {
            type: Boolean,
            default: false,
        },
        tags: [
            {
                type: String
            }
        ]
    }, { timestamps: true }
)

//Auto Generate Slug
projectSchema.pre("save", function () {
    if (!this.slug) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }
})

module.exports = mongoose.model("Project", projectSchema);