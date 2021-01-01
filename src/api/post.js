const domain = "https://crust-bikes-image-server.herokuapp.com/";

export const postImages = (formData) => fetch(`${domain}image-upload`, {
  method: "POST",
  body: formData,
}).then((res) => res.json());

export const approvePhotos = ({bikeID, documentID}) => {
  console.log('bikeID and documentID w/in approvePhotos func', {
    bikeID,
    documentID,
  });
  return fetch(`${domain}bike/${bikeID}/approve`, {
    method: "POST",
    body: JSON.stringify({documentID}),
  }).then((res) => res.json());
};