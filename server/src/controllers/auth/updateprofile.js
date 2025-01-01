const User = require("../../models/User");
const { upload_on_cloudinary } = require("../../utils/cloudinary_upload.js");
const bcrypt = require("bcryptjs");
const fs = require('fs')

module.exports = async (req, res) => {
    const { username, email, password, newPassword } = req.body;
    const imgfile = req.file;

    if (!username || !email || !password) {
        return res.status(400).send({ error: "Missing required fields: email, password, or username." });
    }

    if (!imgfile) {
        return res.status(400).send({ error: "No image file received." });
    }

    

    try {
        const searchUser = await User.findOne({ email });

        if (!searchUser) {
            return res.status(404).send({ error: "No user found with that email." });
        }

        const isMatch = await searchUser.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send({ error: "Invalid password." });
        }

        // Upload image to Cloudinary
        const uploadedImage = await upload_on_cloudinary(imgfile.path);
        console.log(uploadedImage)
        if (!uploadedImage || !uploadedImage.url) {
            return res.status(500).send({ error: "Failed to upload image to Cloudinary." });
        }

        // Hash the new password if provided
        let updatedPassword = searchUser.password;
        if (newPassword) {
            const salt = await bcrypt.genSalt(10);
            // updatedPassword = newPassword
            updatedPassword = await bcrypt.hash(newPassword, salt);
        }

        // Update user details
        await User.updateOne(
            { _id: searchUser._id },
            {
                name: username,
                email: email,
                password: updatedPassword,
                profilePic: uploadedImage.url,
            }
        );
        
        fs.unlink(imgfile.path,(err)=>{
            // console.log(err)
        })

        res.status(200).send({ message: "User updated successfully." });
    } catch (err) {
        console.error("Error updating user:", err);
        res.status(500).send({ error: "Internal server error." });
    }
};
