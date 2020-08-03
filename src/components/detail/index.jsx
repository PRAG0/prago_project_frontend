import React from 'react';
import * as S from './style'
import CompareStore from '../../views/Compare';

const DetailView = (props) => {
  const detail = (ev) => {

    props.handleDetail(null);
  }
  
  return (
    <S.Wrapper onClick={detail}>
      <CompareStore {...props} />
    </S.Wrapper>
  )
}

export default DetailView;