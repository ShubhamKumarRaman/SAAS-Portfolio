const multer = require('multer')
const path = require('path')

//Storage
const storage = multer.diskStorage({});

//File Filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = [
        "application/pdf",
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp"
    ]

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(
            new Error("Invalid file Type"),
            false
        )
    }
}

//Upload config
const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter
})

module.exports = upload;