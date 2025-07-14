import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"

  cloudinary.config({ 
        cloud_name: process.env.Cloudinary_CLOUD_NAME,
        api_key: process.env.Cloudinary_API_KEY, 
        api_secret: process.env.Cloudinary_API_SECRET
    });

    const uploadOnCloudinary = async(localFilePath) => {
      try {
        if(!localFilePath) return null;
        // upload the file Cloudinary
        const respone = await cloudinary.uploader.upload
        (localFilePath, {
          resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary");
        respone.url();
        return respone;        
      } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as upload
        return null;
      }
    }
export {uploadOnCloudinary}