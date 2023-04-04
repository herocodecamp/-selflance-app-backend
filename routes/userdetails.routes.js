const express = require('express');
const {createUserDetails,readUserDetails,updateUserDetails,deleteUserDetails} = require('../controllers/userdetail.controller');
const multer = require("multer");
const path = require("path");


// multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
   
      cb(null, "images");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
      }
    // filename: function (req, file, cb) {
    //   cb(
    //     null,
    //     file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    //   );
    // },
  });



const upload = multer({ storage: storage });



const userDetailRoutes = express.Router();

// read
userDetailRoutes.get('/:userId',readUserDetails)


// create
userDetailRoutes.post('/:userId/create', upload.single("profileImage"), createUserDetails)


// update
userDetailRoutes.put('/:userId/update',upload.single("profileImage"), updateUserDetails)


// delete
userDetailRoutes.delete('/:userId/remove',deleteUserDetails)

module.exports = userDetailRoutes;