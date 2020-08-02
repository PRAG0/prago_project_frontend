import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import {getWishListAPI, deleteWishListAPI} from '../lib/api/list';
import MyWishList from "../views/searchList/MyWishList";



const MyListContainer = () => {

  const [list, setList] = useState([]);
  const [detail, setDetail] = useState(null);

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  const handleDetail = (data) => {
    setDetail(data);
  }

  const handleWish = (like, data) => {
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
      getWishListAPI(auth).then((res) => {
        setList(res.data.map(item => ({...item, like: true})));
          console.log(res.data);
        })
        .catch((err) => {
          alert("위시리스트 불러오기 오류");
        });
    }).catch(err => {
      alert("찜 제거 애러발생");
    });
  }

  useEffect(() => {
    if(auth){
      getWishListAPI(auth).then((res) => {
         setList(res.data.map(item => ({...item, like: true})));
        console.log(res.data);
         })
        .catch((err) => {
          alert("위시리스트 불러오기 오류");
        });
    }
  }, []);


  return (
    <>
      <MyWishList handleWish={handleWish} handleDetail={handleDetail} list={list} detail={detail} />
    </>
  )
}

export default MyListContainer;




