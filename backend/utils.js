const jwt = require("jsonwebtoken")

const  generateToken = (payload) =>{    
    console.log(payload);
    let token = jwt.sign(payload,process.env.jwtSecret)
    return token
}




module.exports = {generateToken}