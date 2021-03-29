const multer = require('multer');
const mimeType = require('mime-types');
const random = require('random');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Homework/upload/');
    },
    filename:function(req,file,cb){
        let fileName = "";
        for(let i = 0; i < 6; i++){
            fileName += random.int(0,9);
        }
        cb(null, `${fileName}.${mimeType.extension(file.mimetype)}`);
    }
});

module.exports = multer({storage:storage});