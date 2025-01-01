// server/src/routes/auth.routes.js
const express = require("express");
const multer = require("multer")
const router = express.Router();
const { login, register, updateProfile } = require("../controllers/auth");

const upload = multer({dest:"uploads/"})

router.post("/register", register);
router.post("/login", login);
router.post("/updateProfile", upload.single("profilePic"),updateProfile)

module.exports = router;
