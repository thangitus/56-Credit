import FormData from "form-data";

const createFormData = (photo, body) => {
  const data = new FormData();
  data.append("file", {
    name: `${photo.filename}.jpg`,
    uri: photo.uri,
    type: "image/jpg"
  });
  if (body) {
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  }
  return data;
};

const UploadImage = async image => {
  if (!image) return;
  const formData = createFormData(image);

  const result = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: 'Client-ID 11982b6736115d5',
      Accept: "application/json"
    }
  });
  console.log("result=", result);
};
export default UploadImage;
