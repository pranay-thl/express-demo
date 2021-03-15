const express = require('express');
const app = express();

app.use(express.json({limit: "250mb"}));
app.use(express.urlencoded({ extended: true }));

let port = process.env.PORT || 80;

app.get("/", (req, res)=>{
    return res.json({msg:"Hello world!"})
});

process.on("uncaughtException",(err)=>{
    console.log(err);
});

app.listen(port,()=>{
    console.log("Listening on port: "+port);
})