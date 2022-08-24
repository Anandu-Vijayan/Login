const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')
const generateToken = require('../utils/generateToken')



const registerUser = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("user alreadey exists")
    }
    const user = await User.create({
        firstname,
        lastname,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
            email: user.email
        })
    }else{
         res.status(400)
         throw new Error("Error Occured")
    }
})
const authUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body


    const user = await User.findOne({email})
    


    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            isAdmin: user.isAdmin,
            email: user.email,
            password:user.password,
            token:generateToken(user._id)

        })
    }else{
        res.status(400)
        throw new Error("invalid username or password")
    }

    
})


module.exports = { registerUser,authUser}