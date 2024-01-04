const path = require('path'); 
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadPath = path.join(__dirname, "../uploads");
        console.log(`Téléchargement vers ${uploadPath}`);
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
