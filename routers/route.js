

const express = require("express")
const router = express()
const validate = require("../validator/check.js")

const {All_data_get,data_post , get_data_by_email , update_data ,Delete_data} = require("../controllers/control.js")


router.get("/all_data", All_data_get)

router.post("/insert_data",validate, data_post)

router.get("/data_by_email" , get_data_by_email)

router.put("/data_update/:email/:password" , update_data)

router.delete("/delete_data/:email/:password",Delete_data)

module.exports = router