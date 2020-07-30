import client from "./client";

export const searchAPI = (query) =>
  client.get("/search_api/search/"+ query);

export const getWishListAPI = (auth) =>
  client.get("/search_api/wishlist/?user_id="+auth.user_id);


export const putWishListAPI = (data) =>
  client.post("/search_api/wishlist/", putWishDataFormat(data));


export const deleteWishListAPI = (data) =>
  client.delete("/search_api/wishlist/", deleteWishDataFormat(data));


export const putWishDataFormat = (data, auth) => ({
  user_id: auth.user_id,
  product_name: data.product_name,
  product_price: data.product_price,
  product_image: data.product_image,
  product_site_name: data.product_site_name,
  product_site_link: data.product_site_link,
})

export const deleteWishDataFormat = (data, auth) => ({
  user_id: auth.user_id,
  product_site_link: data.product_site_link,
})
