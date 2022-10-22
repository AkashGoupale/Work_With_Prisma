
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()


const All_data_get = async (req,res) => {
    try {
        const data = await prisma.emp_detail.findMany({})
        res.send({status:"successful",all_data:data})
    }
    catch(err) {
       res.send({status:"Fail",error:err.message})
    }
}

const data_post = async (req,res) => {
    try {
        const data= await prisma.emp_detail.create({data:req.body})
        res.send({status:"successful",inserted_data:data})
    }
    catch(err) {
        res.send({"status":"Fail",error:err.message})
    }
}

const get_data_by_email = async (req,res)=> {
    try {
        const {name,email,password,contact} = req.body
        const data = await prisma.emp_detail.findMany({where:{
            email:email,
            password:password
        }})
        if (data.length==0) {
            res.send({status:"Fail",message:"Your email does not exists or password is wrong..please check your password and email once."})
        }
        else {
            res.send({status:"successful",data:data})
        }
    }
    catch(err) {
        res.send({status:"Fail",error:err.message})
    }
}


const update_data = async (req,res) => {
    try {
        const d = await prisma.emp_detail.updateMany({
           where :{
            email:req.params.email,
            password:req.params.password
           },
           data:req.body
        })
        if (d.count==0) {
            res.send({status:"Fail",message:"your email or password is wrong.Please check once."})
        }
        else {
            res.send({status:"successful",message:"your data update successful.",data:d})
        }

    }
    catch(err) {
        res.send({status:"Fail",error:err.message})
    }
}


const Delete_data = async(req,res) => {
    try {
        const data = await prisma.emp_detail.deleteMany({
            where:{
                email:req.params.email,
                password:req.params.password
            }
        })
        if (data.count==1) {
            res.send({status:"successful",message:"data delete successful.."})
        }
        else {
            res.send({status:"Fail",message:"your password or email wrong."})
        }
    }
    catch (err) {
        res.send({status:"Fail",error:err.message})
    }
}

module.exports = {All_data_get, data_post , get_data_by_email, update_data , Delete_data}