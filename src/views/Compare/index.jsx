import React from 'react';
import * as S from './style'
import linkBtn from '../../assets/icons/linkBtn.png'

const CompareStore = ({product_site_name, product_image, product_site_link, product_name, product_price}) => {
    return (
      <S.Wrapper>
        <S.Product>
          <img src={product_image} alt={product_site_name+ ' 이미지'} />
          <p>{product_name}</p>
        </S.Product>
        <S.Stores>
          <S.Store>
            <span className="site">{product_site_name}</span>
            <span className="price">{product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            <a href={product_site_link}><img alt={'최저가 이동 아이콘'} src={linkBtn} /></a>
          </S.Store>
          <S.StoreList>
          </S.StoreList>
        </S.Stores>
      </S.Wrapper>
    )
}

export default CompareStore;