// import { v2 as cloudinary } from 'cloudinary';
const {v2 : cloudinary} = require("cloudinary")

const upload_on_cloudinary =async(localPath)=>{
    cloudinary.config({ 
        cloud_name: 'djfhwhtyy', 
        api_key: '944476654513192', 
        api_secret: 'AbbLeYlaOpNfB1lHWeJACHmJGlg' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
    const uploadResult = await cloudinary.uploader
       .upload(localPath)
       .catch((error) => {
           console.log(error);

       });
    
    // console.log("image uploaded on ", uploadResult.url);
    return (uploadResult)
}

// export default {upload_on_cloudinary}
module.exports = {upload_on_cloudinary}