import React from 'react';
import * as S from './style'
import fillHeart from '../../assets/icons/fillHeart.png'
import roundedHeart from '../../assets/icons/roundedHeart.png'

const Item = ({ handleDetail, handleWish, data }) => {

  const handleClick = (ev) => {
    ev.preventDefault();
    handleDetail(data)
  };

  const handleLike = (ev) => {
    ev.preventDefault();
    handleWish(data);
  }

  return (
    <S.ItemBox onClick={handleClick} >
      <img src={data.product_image} alt={data.product_name + ' 이미지'} />
      <div>
        <span>{data.product_name}</span>
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