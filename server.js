//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.use(express.static(__dirname+"/public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));
const PORT = 3000; // 定義伺服器運行的端口號

var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");
var ContactDB = DB.create(__dirname+"/contact.db");
 

ProfolioDB.insert([
    { modal: "#portfolioModa8", imgSrc: "FW_pics/s05.jpg", heading: "", text: "" ,id:"8" ,},
    { modal: "#portfolioModa9", imgSrc: "FW_pics/s06.jpg", heading: "", text: "" ,id:"9" ,},
    { modal: "#portfolioModal0", imgSrc: "FW_pics/s07.jpg", heading: "", text: "" ,id:"0" ,},
    { modal: "#portfolioModal1", imgSrc: "FW_pics/s08.jpg", heading: "", text: "" ,id:"1" ,},
    { modal: "#portfolioModal2", imgSrc: "FW_pics/s09.jpg", heading: "", text: "" ,id:"2" ,},
    { modal: "#portfolioModal3", imgSrc: "FW_pics/s10.jpg", heading: "", text: "" ,id:"3" ,},
])

server.get("/profolio", (req,res)=>{
      //DB
      ProfolioDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})

server.post("/contact_me", (req,res)=>{
     ContactDB.insert(req.body);
     res.redirect("/#contact");
})

server.listen(3000, ()=>{
    console.log(`伺服器運行中 運行在：http://localhost:${PORT}`);
})