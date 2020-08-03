import React, {useState, useEffect} from "react";

import {useSelector} from 'react-redux';
import {getRecommendListAPI, putWishListAPI} from '../lib/api/list';

import RecommendList from "../views/productList/RecommendList";

import { rawData } from './tempData'


const RecommendListContainer = () => {
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

    console.log(data);

    const index = list.findIndex(item => item.index === data.index);
    const selected = list[index];
    const nextList = [...list];
    putWishListAPI(data, auth).then(res => {
        nextList[index] = {
          ...selected,
          like: true
        }
        setList([...nextList]);
    }).catch(err => {
      alert("찜 등록 애러발생");
    })
  }


  useEffect(() => {
    // setList(JSON.parse(rawData));

    getRecommendListAPI().then((res) => {
      setList(res.data.map(item => ({...item, like: false})));
      console.log(res.data);
    }).catch(err => {alert("오류")})

  }, []);

  return (
    <>
      <RecommendList handleWish={handleWish} handleDetail={handleDetail} list={list} detail={detail}/>
    </>
  )
}

export default RecommendListContainer;