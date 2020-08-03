import React from 'react';
import * as S from './style'

const MyItem = ({ handleDetail, handleWish, data }) => {

  const handleClick = (ev) => {
    ev.stopPropagation();
    handleDetail(data)
  };

  const handleLike = (ev) => {
    ev.stopPropagation();
    handleWish(data.like, data);
  }

  return (
    <S.ItemBox onClick={handleClick} >
      <img src={data.product_image} alt={data.product_name + ' 이미지'} />
      <div>
        <span>{data.product_name}</span>
        <div onClick={handleLike} className="delete">X</div>
      </div>
    </S.ItemBox>
  )
}

export default MyItem;