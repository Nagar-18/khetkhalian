const express=require("express");
const mongoDb=require("./DB/connection");
const User=require("./modals/Schema"); 
mongoDb();

const app=express();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Reuested-With,Content-Type,Accept");
    next();
})
app.use(express.json());//MiddleWere

app.use('/api',require("./routes/userinfo"));






app.get("/",(req,res)=>{
    res.send("hello from backend ");
});
app.listen(5000,()=>{
    console.log("listing to port 5000")
})