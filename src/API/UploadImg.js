import FormData from "form-data";
import axios from "axios";
import { ImageStore } from "react-native";

const createFormData = photo => {
  ImageStore.getBase64ForTag(
    "http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg",
    e => console.warn("getBase64ForTag: ", e)
  );

  console.log(base64data);
  const formData = new FormData();
  formData.append("upload", {
    image: base64data,
    type: "base64"
  });

  return formData;
};

const UploadImage = async image => {
  if (!image) return;
  // const formData = createFormData(image);
 
  let base64data = await ImageStore.getBase64ForTag(
    image.uri,
    data => {
      // resolve(data);
    },
    err => {
      console.log(err);
    }
  );
  console.log("------------------------");
  // const formData = new FormData();
  // formData.append("upload", {
  //   image: base64data,
  //   type: "base64"
  // });
  
  const result = await fetch("https://api.imgur.com/3/upload", {
    method: "POST",
    body: base64data,
    headers: {
      Authorization: "Client-ID 11982b6736115d5",
      'Content-type': "application/json"
    }
  });
   // await axios({
  //   method: "POST",
  //   url: "https://api.imgur.com/3/upload",
  //   data: formData,
  //   config: {
  //     headers: {
  //       Authorization: "Client-ID 11982b6736115d5",
  //       Accept: "application/json"
  //     }
  //   }
  // })
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error))
  //   .finally(() => {
  //     console.log("Finish upload.");
  //   });
  console.log("result=", result);
};
export default UploadImage;
