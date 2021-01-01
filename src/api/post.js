const domain = "https://crust-bikes-image-server.herokuapp.com/";

export const postImages = (formData) => fetch(`${domain}image-upload`, {
  method: "POST",
  body: formData,
}).then((res) => res.json());