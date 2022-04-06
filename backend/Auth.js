const jwt = require("jsonwebtoken")


const Auth = async (req, res, next) => {
    console.log("req.headers");
    console.log(req.headers.authorization);
    let token = req.headers.authorization
    //console.log(token);
    if (token) {

        jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
            console.log(decoded);
            if (decoded) {
                req.user = decoded.user
                console.log(req.user);
                next();

            } else {
                console.log(err);
                return res.status(400).send({ error: "The provided token is invalid" })
            }
        })




    } else {
        return res.send({ error: "Could not find token" })
    }
}

module.exports = Auth;