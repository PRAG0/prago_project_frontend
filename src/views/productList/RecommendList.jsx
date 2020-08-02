import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import * as S from "./style";
import Item from "../../components/item/RecommendItem";
import ProductList from './index';
import icon from '../../assets/icons/star.png'
import DetailsView from "../../components/detail";

const RecommendList = ({handleWish, handleDetail, list, detail}) => {
  
  return (
    <>
    { detail && 
      <DetailsView 
      {...detail}
      handleDetail={handleDetail}
      />
    }
        <S.Wrapper>
          <div>
            <img src={icon} alt="추천 리스트 아이콘"/>
            <h2>추천 리스트</h2>
          </div>
          <div style={{display: 'flex', height: '400px'}}>
          {
            (list.length > 4) ?
              <HorizontalScroll reverseScroll>
                {
                  list.map((item) => (
                    <Item
                      handleDetail={handleDetail}
                      handleWish={handleWish}
                      key={item.index}
                      data={{...item}}
                    />
                  ))
                }
                </HorizontalScroll> 
              :
                list.map((item) => (
                  <Item
                    handleDetail={handleDetail}
                    handleWish={handleWish}
                    key={item.index}
                    data={{...item}}
                  />
                ))
          }

            
          </div>
        </S.Wrapper>
    </>
  )
}

export default RecommendList;