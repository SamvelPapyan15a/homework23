const multer = require('multer');
const mimeType = require('mime-types');
const random = require('random');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Homework/upload/');
    },
    filename:function(req,file,cb){
        cb(null, `${file.originalname}.${mimeType.extension(file.mimetype)}`);
    }
});

module.exports = multer({storage:storage});