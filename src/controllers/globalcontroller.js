import "../server";
import globalRouter from "../routers/globalRouter";
import mongoose from "mongoose";
import Fish from "../models/fishmodels";
const fs = require("fs");

export const serveapi = (req,res) => {
    try{
    fs.unlinkSync('uploads/google2001.jpg');
    
    }
    catch(err){
        console.log("Error in deleting");
    }
    return res.render("home.pug");
}
var rs;
var arr;
var The_fish;
var percent; 
var The_fish2;
export const getphoto = (req,res) => {
    const {spawn} = require('child_process');
    const py = spawn('python',[ '\\home\\ubuntu\\fish_backend\\src\\python.py']);
    try{
        py.stdout.on ('data', function (data) {
            rs = data.toString();
            arr = rs.split(" ")
            
            The_fish = arr[0];
            percent = arr[1][12];
                     
            
            console.log(The_fish2);
            if(percent==7 || percent ==8 || percent==9)
            {
                if(The_fish == 0)
                return res.redirect(`/fish/altivelis`); 
                if(The_fish == 1)
                return res.redirect(`/fish/blackseabream`);
                if(The_fish == 2)
                return res.redirect(`/fish/cogfish`);
                if(The_fish == 3)
                return res.redirect(`/fish/cutlassfish`);
                if(The_fish == 4)
                return res.redirect(`/fish/darkrockfish`);
                if(The_fish == 5)
                return res.redirect(`/fish/eel`);
                if(The_fish == 6)
                return res.redirect(`/fish/flounder`);
                if(The_fish == 7)
                return res.redirect(`/fish/horsemackerel`);
                if(The_fish == 8)
                return res.redirect(`/fish/leopardmandarinfish`);
                if(The_fish == 9)
                return res.redirect(`/fish/otakii`);
                if(The_fish == 10)
                return res.redirect(`/fish/referrer`);
                if(The_fish == 11)
                return res.redirect(`/fish/rockfish`);
                if(The_fish == 12)
                return res.redirect(`/fish/smelt`);
                if(The_fish == 13)
                return res.redirect(`/fish/titlefish`);
                if(The_fish == 14)
                return res.redirect(`/fish/wholefish`);
                if(The_fish == 15)
                return res.redirect(`/fish/yeolmokfish`);
            }
            else{
                return res.render("home.pug")
            }


            
        });
         
    }
    
    catch {
        return res.end("wrong");
    }
}

var ss;
var ds;
var show;
export const getdb =async (req,res) => {
    const check = await Fish.exists({ id: req.params.id });
    if (check)
    {
        
        const fish = await Fish.find( { id: req.params.id } );
        ss= JSON.stringify(fish)
        console.log(ss);
        ds= JSON.parse(ss);
        const name = ds[0].id;
        const cannotcatch = ds[0].cannotcatch
        show= `You cannot catch ${name} in ${cannotcatch}`
        res.send(show);
    }
    else {
        console.log("Safe Fish");
        res.render("home.pug")
    }
}
