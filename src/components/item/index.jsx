import React from 'react';
import * as S from './style'
import fillHeart from '../../assets/icons/fillHeart.png'
import roundedHeart from '../../assets/icons/roundedHeart.png'

const Item = ({ handleDetail, handleWish, product_name, product_site_link, product_image, product_site_name, product_price, like }) => {

  const handleClick = (ev) => {
    ev.preventDefault();
    handleDetail({product_site_name, product_image, product_site_link, product_name, product_price})
  };

  const handleLike = (ev) => {
    ev.preventDefault();
    handleWish({product_site_name, product_image, product_site_link, product_name, product_price});
  }

  return (
    <S.ItemBox onClick={handleClick} >
      <img src={product_image} alt={product_name + ' 이미지'} />
      <div>
        <span>{product_name}</span>
        <img
          onClick={handleLike}
          className="like"
          src={like ? fillHeart : roundedHeart}
          alt="찜 아이콘"
        />
      </div>
    </S.ItemBox>
  )
}

export default Item;