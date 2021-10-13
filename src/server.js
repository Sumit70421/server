const { response } = require("express");
const express = require("express");
const app = express()
const serverless = require("serverless-http");
app.get("/",(req,res)=>{
    res.json({
        hi: "Hope this is working"
    })
    console.log("HELLO")
})
app.use(`/.netlify/functions/api`, router);
app.listen(3000 , ()=>{
    console.log("Im on ")
})  


module.exports = app;
module.exports.handler = serverless(app);