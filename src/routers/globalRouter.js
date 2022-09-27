import express from "express";
import {serveapi,getphoto,getdb} from "../controllers/globalcontroller";
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'uploads/')
    },
    filename: function(req,file,cb) {
        cb(null, "google2001.jpg");
    }
});
const upload = multer({ storage: storage});
const globalRouter = express.Router();
var fs = require("fs");


globalRouter.get("/fish/:id",getdb);



globalRouter.route("/api").get(serveapi).post(upload.single('file'),getphoto);
export default globalRouter;