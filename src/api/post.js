import { domain } from './helpers';

export const postImages = (formData) => fetch(`${domain}image-upload`, {
  method: "POST",
  body: formData,
}).then((res) => res.json());