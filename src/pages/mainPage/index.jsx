import React, {useEffect} from "react";
import Sidebar from "../../components/sidebar";
import * as S from "./style";
import Header from "../../components/header";
import ProductList from "../../views/productList";
import {useSelector} from 'react-redux';
import { getWishListAPI } from "../../lib/api/list";
import WishListContainer from "../../containers/WishListContainer";


const Main = () => {
  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  useEffect(() => {
    if(auth) {
      getWishListAPI(auth.user_id).then(res => {
        console.log(res.data);
      });
    }
  }, [auth])

  return (
    <S.Wrapper>
      <Header />
      <Sidebar />
      <WishListContainer />
      <ProductList id="sale" title="오늘의 핫딜"  />
      <ProductList id="heart" title="내가 찜한 것" />
    </S.Wrapper>
  );
};

export default Main;