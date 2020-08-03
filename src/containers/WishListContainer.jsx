import React, {useState, useEffect} from "react";

import {useSelector} from 'react-redux';
import {getWishListAPI, putWishListAPI, deleteWishListAPI} from '../lib/api/list';

import WishList from "../views/productList/WishList";

import { rawData } from './tempData'


const WishListContainer = () => {
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState(null);

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  const handleDetail = (data) => {
    setDetail(data);
    console.log(data, detail)
  }

  const handleWish = (data) => {
    if(!auth) {
      alert("로그인 후 이용이 가능합니다.");
      return;
    }

    const index = list.findIndex(item => item.id === data.id);
    const selected = list[index];
    const nextList = [...list];
    nextList[index] = {
      ...selected,
      like: false
    }

    deleteWishListAPI(data.id, auth).then(res => {
      getWishListAPI(auth.user_id).then((res) => {
        setList(res.data.map(item => ({...item, like: true})));
          console.log(res.data);
      }).catch(err => {alert("오류")})
    }).catch(err => {
      alert("찜 제거 애러발생");
    });
  }

  useEffect(() => {
    // setList(JSON.parse(rawData));
    if(auth){
      getWishListAPI(auth.user_id).then((res) => {
        setList(res.data.map(item => ({...item, like: true})));
        console.log(res.data);
      }).catch(err => {alert("오류")})
    }
    else {
      setList([]);
    }

  }, [auth]);

  return (
    <>
      <WishList handleWish={handleWish} handleDetail={handleDetail} list={list} detail={detail}/>
    </>
  )
}

export default WishListContainer;