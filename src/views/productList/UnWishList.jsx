import React from 'react';
import ProductList from './index';
import icon from '../../assets/icons/heart.png'

const UnWishList = () => {
  
  return (
    <>
    <ProductList 
      title="위시 리스트"
      icon={icon}
      iconDescription="위시 리스트 아이콘"
    />
    </>
  )
}

export default UnWishList;