const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const securePassword = async (password) => {
    try{
        const passwordHash = await bcryptjs.hash(password, 10);
        return passwordHash;
    }catch(error){
        res.status(400).send(error.message);
    }
}

const registerUser = async (req, res) => {
    try {

        const spassword = await securePassword(req.body.password);

        const user = new userModel({
            name: req?.body?.name,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
            password: spassword,
            image: req.file.filename,
            type: req.body.type
        });

        const userData = await userModel.findOne({email: req.body.email});
        if(userData){
           res.status(409).send({message: "Email already exists",});
        } else {
           const user_data = await user.save();
           res.status(201).send({message: "Created successfully!", data: user_data});
        }

    }catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    registerUser
}