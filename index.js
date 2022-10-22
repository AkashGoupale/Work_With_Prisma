

const express = require("express");
const app = express();
const port = 4000;
app.use(express.json())

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const validate = require("./validator/check.js")

const router = require("./routers/route.js");

app.use("/",router)


app.listen(port , ()=> {
    console.log("server running on port 4000.")
})




 /* prisma command  
  first we have to run npx prisma init 
  after we get shcema and .env file there 
  we have to change just like  
  DATABASE_URL="mysql://root:Akash@123@localhost:3306/employees?schema=public"
  and in schema.prisma we have to change mysql name and after that we have to make 
  model 
  then migration command is 
  npx prisma migrate dev --name init1 */