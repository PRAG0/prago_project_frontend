import React from 'react';
import * as S from './style';
import Item from '../../components/item';

const SearchList = ({list, handleDetail, handleWish}) => {
  return (
    <S.Wrapper>
      <S.Block>
        {list.map(item =>
          <Item key={item.index} handleDetail={handleDetail} handleWish={handleWish} {...item} />
        )}
      </S.Block>
    </S.Wrapper>
  )
}

export default SearchList;