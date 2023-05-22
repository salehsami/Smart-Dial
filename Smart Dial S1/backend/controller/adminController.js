const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Admin = require("../model/adminModel")

// description = Authenticate user
// route = post api/users/login
// access private
const loginAdmin = asyncHandler(async (req, res) => {
    
    // get email and password from body
    const { email, password } = req.body
    
    // find by email
    const admin = await Admin.findOne({ email })

    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            // password:hashedPassword,
            email: admin.email,
            password: admin.password,
            token: generateToken(admin._id)

            // pin: hashedPassword
        })
    }
    else {
        res.status(400)
        throw new Error("Admin don't exists")
    }
})

// description = get user data
// route = get api/users/me
// access private
const getMe = asyncHandler(async(req, res) => {
    // const user = User.find()
    // res.status(200).json("user data is getting") // now we will use real data istead this
    const { _id, email, password } = await Admin.findById(req.admin.id)
    res.status(200).json({
        id: _id,
        email,
        password // can also give this but i think we have neglected the password but meh! whatever
    })
})

//jwt token generation
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_Secret, {
        expiresIn: '60d'
    })
}

module.exports = { loginAdmin, getMe }