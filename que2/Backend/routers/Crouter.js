const router = require("express").Router();

const Category= require("../models/Category")

router.get("/cat",(req, res) => {
    Category.find((err, data) => {
       if (!err) {
           res.json(data);          
       }
   })
})
router.get("/dd",async(req,res)=>{
    var data = await Category.distinct("Cname")
    res.json(data);
})
router.post("/cat", async (req, res) => {         
    Category.create(req.body,(error,data)=>{
       if(!error)
       {
        res.json(data);                   
       }      
       else{ 
        return error; 
       }      
    })
})
module.exports = router