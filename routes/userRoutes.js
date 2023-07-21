const express = require("express");
const user_route = express();

const bodyParser = require("body-parser");

user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended: true}));

const multer = require("multer");

const path = require('path');

user_route.use(express.static("public"));

const storage = multer.diskStorage({
    destination: (req, file , cb) => {
        cb(null, path.join(__dirname, "../public/userImages"), function(error, success){
            if(error) throw error
        });
    },
    filename: (req, file, cb) => {
        const name = Date.now()+"-"+file.originalname;
        cb(null, name, (error1, success1) => {
            if(error1) throw error1
        })
    }
})

const upload = multer({storage});


const user_controller = require("../controllers/userController");

user_route.post("/register", upload.single('image'), user_controller.registerUser)

module.exports = user_route;