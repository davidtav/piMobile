import { Cloudinary } from "@cloudinary/url-gen";
import { UploadApiResponse } from "cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params";
import { upload } from "cloudinary-react-native";


// Create a Cloudinary instance and set your cloud name.
export const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME,
    }
  });

 export const uploadImage = async (file:string) => {
    const options = {
    upload_preset: "Default",
    unsigned: true,
  };
  return new Promise<UploadApiResponse>(async (resolve, reject) => {
    //upload the image to cloudinary
    await upload(cld, {
      file,
      options: options,
      callback: (error, response) => {
        if (error || !response) {
          reject(error);
        } else {
          resolve(response);
        }
      },
    });
  });
};