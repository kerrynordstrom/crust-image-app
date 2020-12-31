import { domain } from './helpers';

export const getBikesByModel = (bikeModel) =>
      fetch(`${domain}bikes/${bikeModel}`, {
      method: "GET",
      }).then((data) => data.json());