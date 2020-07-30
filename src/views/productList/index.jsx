import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import * as S from "./style";
import Item from "../../components/item";

const ProductList = ({ title, icon, iconDescription, handleWish, handleDetail, list=[], detail }) => {
  return (
    <S.Wrapper>
      <div>
        <img src={icon} alt={iconDescription}/>
        <h2>{title}</h2>
      </div>
      <div style={{height: '360px'}}>
        <HorizontalScroll reverseScroll>
          {
            list.map((item) => (
              <Item
                handleDetail={handleDetail}
                handleWish={handleWish}
                key={item.index}
                {...item}
              />
            ))
          }
          </HorizontalScroll>
      </div>
    </S.Wrapper>
  );
};

export default ProductList;
