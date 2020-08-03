import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import * as S from "./style";
import Item from "../../components/item";

const ProductList = ({ title, icon, iconDescription }) => {
  return (
    <S.Wrapper>
      <div>
        <img src={icon} alt={iconDescription}/>
        <h2>{title}</h2>
      </div>
      <div style={{display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{fontSize: '20px'}}>찜 목록을 보려면 로그인 해주세요.</div>
      </div>
    </S.Wrapper>
  );
};

export default ProductList;
