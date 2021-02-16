const domain = "https://crust-bikes-image-server.herokuapp.com/";

export const postImages = (formData) =>
  fetch(`${domain}image-upload`, {
    method: "POST",
    body: formData,
  }).then((res) => res.json());

export const postBikeDetails = (bikeID, bikeDetails) => {
  fetch(`${domain}bike-details-upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bikeID, bikeDetails }),
  }).then((res) => res.json());
};

export const approvePhotos = ({bikeID, documentID}) => {
  return fetch(`${domain}bike/${bikeID}/approve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ documentID }),
  }).then((res) => {
    return res;
  });
};