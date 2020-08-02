import React from 'react';
import * as S from './style'
import fillHeart from '../../assets/icons/fillHeart.png'
import roundedHeart from '../../assets/icons/roundedHeart.png'

const Item = ({ handleDetail, handleWish, data }) => {

  const handleClick = (ev) => {
    ev.preventDefault();
    handleDetail({
      index: data.index,
      product_imgae: data.recommend_product_imgage,
      product_name: data.recommend_product_name,
      product_price: data.recommend_product_price,
      product_site_link: data.recommend_product_site_link,
      product_site_name: data.recommend_product_site_name
    })
  };

  const handleLike = (ev) => {
    ev.preventDefault();
    handleWish({
      index: data.index,
      product_imgae: data.recommend_product_imgage,
      product_name: data.recommend_product_name,
      product_price: data.recommend_product_price,
      product_site_link: data.recommend_product_site_link,
      product_site_name: data.recommend_product_site_name
    });
  }

  return (
    <S.ItemBox onClick={handleClick} >
      <img src={data.recommend_product_image} alt={data.recommend_product_name + ' 이미지'} />
      <div>
        <span>{data.recommend_product_name}</span>
        <img
          onClick={handleLike}
          className="like"
          src={data.like ? fillHeart : roundedHeart}
          alt="찜 아이콘"
        />
      </div>
    </S.ItemBox>
  )
}

export default Item;