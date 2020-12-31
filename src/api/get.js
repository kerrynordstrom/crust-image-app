import { domain } from './helpers';

export const getBikesByModel = (bikeModel) =>
      fetch(`${domain}bikes/${bikeModel}`, {
      method: "GET",
      }).then((data) => data.json());

export const getBikeByID = (bikeID) => fetch(`${domain}bike/${bikeID}`, {
      method: "GET",
      }).then((data) => data.json());