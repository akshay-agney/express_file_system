const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    let arr =[];
    fs.readdir('./files',(err,files)=>{
        files.forEach((file)=>{
            let data = fs.readFileSync(`./files/${file}`);
            arr.push({filename: file, filedata: data});
        });
        res.render("index",{files: arr});
    })
})

app.get('/create',(req,res)=>{
    res.render("create");
})

app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.filename}.txt`,req.body.filedata,(err)=>{
        if(err){
            return res.send(err)
        }else{
            res.redirect('/');
        }
    })
})

app.get('/edit/:filename',(req,res)=>{

})
app.get('/del/:filename',(req,res)=>{
    fs.unlink(`./files/${req.params.filename}`,(err)=>{
        if(err) return res.send(err)
            else res.redirect("/");
    })
})

app.listen(port,()=> console.log("i am running baby, do not worry"));
