export const getBikesByModel = (bikeModel) => fetch(`http://localhost:8080/bikes/${bikeModel}`, {
      method: "GET"
}).then(data => data.json());