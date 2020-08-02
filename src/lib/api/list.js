import client from "./client";

export const searchAPI = (query) =>
  client.get("/search_api/search/"+ query);

export const getWishListAPI = (auth) =>
  client.get("/wishlist_api/wishlist/?favor_user_id="+auth);

export const putWishListAPI = (data, auth) =>
  client.post("/wishlist_api/wishlist/", putWishDataFormat(data, auth));


export const deleteWishListAPI = (data, auth) =>
  client.delete("/wishlist_api/wishlist/"+data, {favor_user_id: auth.user_id});


export const getRecommendListAPI = () =>
  client.get("/recommend_api/recommend-list/");
  
export const putWishDataFormat = (data, auth) => {
  const sendData = new FormData();
  sendData.append('favor_user_id', auth.user_id);
  sendData.append('product_name', data.product_name);
  sendData.append('product_price', data.product_price);
  sendData.append('product_image', data.product_image);
  sendData.append('product_site_name', data.product_site_name);
  sendData.append('product_site_link', data.product_site_link);

  return sendData;
}
