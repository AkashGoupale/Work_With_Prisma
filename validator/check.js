
const validator = require("validator")

const validate = (req,res,next) => {
    const {name ,email ,password , contact} = req.body
    if (!validator.isEmail(email)) {
        return res.send("Your Email is wrong Please give correct Email...")
    }
    if (!validator.isStrongPassword(password,{minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})) {
        return res.send("Your password is wrong. Password should be strong..")
    }
    if (!(contact.length==10) && validator.isMobilePhone(contact)) {
        return res.send("Your mobile is wrong. please eneter correct mobile number.")
    }
    next()
} 

module.exports = validate