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


export const getphoto = (req,res) => {
    const {spawn} = require('child_process');
    const py = spawn('python',[ 'C:\\Users\\user\\Documents\\fish\\src\\python.py']);
    py.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    py.stderr.on('data', function(data) {
        console.log(data.toString());
    });
    return res.send(req.file);
}


export const getdb =async (req,res) => {
    const check = await Fish.exists({ id: req.params.id });
    if (check)
    {
        
        const fish = await Fish.find( { id: req.params.id } );
        console.log("Existing Fish!!");
        
        res.json(fish);
    }
    else {
        console.log("Safe Fish");
        res.render("home.pug")
    }
}
