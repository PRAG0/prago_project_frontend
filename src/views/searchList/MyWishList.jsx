import React from 'react';
import * as S from './style';
import MyItem from '../../components/item/MyItem';
import DetailView from '../../components/detail'
const MyWishList = ({list, handleDetail, handleWish, detail}) => {
  return (
    <>
    {detail && <DetailView {...detail} handleDetail={handleDetail}/>}
    
      <S.Block>
        {list.map(item =>
          <MyItem key={item.index} handleDetail={handleDetail} handleWish={handleWish} data={{...item}} />
        )}
      </S.Block>
    
    </>
  )
}

export default MyWishList;