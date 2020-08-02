import React from 'react';
import ProductList from './index';
import icon from '../../assets/icons/heart.png'
import DetailsView from "../../components/detail";

const MyWishList = ({handleWish, handleDetail, list, detail}) => {
  
  return (
    <>
    { detail && 
      <DetailsView 
      {...detail}
      handleDetail={handleDetail}
      />
    }
    <ProductList 
      title="위시 리스트"
      icon={icon}
      iconDescription="위시 리스트 아이콘"
      handleWish={handleWish}
      handleDetail={handleDetail}
      list={list}
    />
    </>
  )
}

export default MyWishList;