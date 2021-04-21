const express=require("express")

const app=express();

app.get("/user",(req,res)=>{
	 console.log('list接口');
	 let r=req.data;
    res.json({
        hello: r
    })
})


app.get("/login",(req,res)=>{
	 console.log('list接口');
	 let r=req.data;
    res.json({
        hello: "name"
    })
})

app.listen("4000");