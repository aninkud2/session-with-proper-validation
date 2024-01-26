const router=require("express").Router()
const{createUser}=require("../controller/userController")
router.get("/",(req,res)=>{
    res.json("welcome to my api")
})
router.post("/signup",createUser)

module.exports=router