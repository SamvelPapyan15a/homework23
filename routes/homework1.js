const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload_homework1');

router.route('/').get((req,res)=>{
   res.end("Homework1");
}).post(upload.single('file'),(req,res)=>{
    res.end('uploaded');
});

module.exports = router;