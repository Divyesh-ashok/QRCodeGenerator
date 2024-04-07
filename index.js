import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ProgressBar from "progress";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var a=false;
var path="/public/index.html"
var container=('#container');
function check(req,res,next)
{
    const b=(req.body["url"]).URL;
    //const url=b.URL;
    var qr_svg = qr.image(b, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('public/qrgen.png'));
    fs.writeFile('url.txt',b,function(err){
        if(err) throw err;
        console.log('File has been saved');
    });
    
/*    var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#836FFF'},
    to: {color: '#FF9551'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
    });

    bar.animate(1.0); */
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//app.use(check);

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.post("/login", (req,res) => {
    
    const b=(req.body["url"]);
    //const url=b.URL;
    var qr_svg = qr.image(b, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('public/qrgen.png'));
    fs.writeFile('url.txt',b,function(err){
        if(err) throw err;
        console.log('File has been saved');
    });
    
/*    var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#836FFF'},
    to: {color: '#FF9551'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
    });

    bar.animate(1.0); */
    res.render("index2.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});







/*
$(document).ready(function()
{        
    $("#btn").click(function () {
      const str=$("#in").val();
      const url=str.URL;
      var qr_svg = qr.image(url, { type: 'png' });
      qr_svg.pipe(fs.createWriteStream('qrgen.png'));
      fs.writeFile('url.txt',url,function(err){
          if(err) throw err;
          console.log('File has been saved');
      });
    });
});*/