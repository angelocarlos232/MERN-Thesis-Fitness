const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users');
const toast = require('react-hot-toast');

const register = async (req,res) => {
    const {username, password, repeatpassword} = req.body;

    try {
        const usernameExists = await User.findOne({username});
        
        if (usernameExists) {
            return res.json({ error: "Username already exists" });
        }

        if (repeatpassword !== password){
            return res.json({ error: "Passwords do not match" });
        }

        const user = new User({
            username,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        return res.json(user);

    } catch (error) {
        console.log("Server error (Register)", error);
        return res.status(500).json({ message: "Server error" });
    }
}

const login = async (req,res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if(!user){
            return res.json({
                error: 'Invalid or username does not exist'
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if(match){
            jwt.sign({username: user.username, id: user._id}, process.env.JWT, {}, (err, token) =>{
                if(err) throw err;
            res.cookie('token', token).json(user);
            })

        } else{
            return res.json({
                error: 'Incorrect username or password'
            });
        }
    } catch (error) {
        console.error("Server error (Login)", error);
        return res.status(500).json({ message: "Server error" });
    }
}




module.exports = { register, login };
