import multer from "multer"

// configuration du stockage de l'image

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cb(null, "upload/")
    },
    
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

// le filtrage

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')) {
        cb(null, true)
    
    } else {
        cb(new Error ('Seul les medias de type image sont autorisé'), false)
    }

    }

// exporter le middleware multer prêt

export const upload = multer({
    storage, fileFilter,
    limits: {fileSize: 20*1024*1024} // limite 20 Mo par fichiers
})

