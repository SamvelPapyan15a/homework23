const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload_homework2');
const fs = require('fs');
const users = require('../users.json');

function writeFile(){
    fs.writeFile('./users.json',JSON.stringify(users),err => {
        if(err){
            return err.message;
        }
    });
}

router.route('/').get((req,res)=>{
    res.json(users);
}).post(upload.single('file'),(req,res)=>{
    if(users[req.body.username]){
        res.json({
           success:false,
            data:null,
            message:"username is taken"
        });
    }
    else{
        users[req.body.username] = {
            username: req.body.username,
            name: req.body.name,
            image: req.file.filename
        }
        writeFile();
        res.json({
            success:true,
            data:users[req.body.username],
            message:"user created"
        });
    }
});

router.route('/:username').get((req,res)=>{
    if(users[req.params.username]){
        res.json(users[req.params.username]);
    }else{
        res.json({
            success:false,
            data:null,
            message:"user not found"
        });
    }
}).delete((req,res)=>{
    if(users[req.params.username]){
        delete users[req.params.username];
        writeFile();
        res.json({
            message:"user deleted"
        });
    }else{
        res.json({
            success:false,
            data:null,
            message:"user not found"
        });
    }
});

module.exports = router;