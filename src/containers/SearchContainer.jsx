import React, {useState, useEffect} from "react";

import SearchList from "../views/searchList";
import CompareStore from "../views/Compare";

import {useLocation, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {searchAPI, putWishListAPI, deleteWishListAPI} from '../lib/api/list';

import loadingImg from '../assets/icons/loading.gif'

const SearchContainer = () => {
  const location = useLocation();
  const history = useHistory();

  const [list, setList] = useState([]);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const { auth } = useSelector(({ auth, loading }) => ({
    auth: auth.auth,
  }));

  const handleDetail = (data) => {
    setDetail(data);
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
    if(location.search === "") history.push('/'); 
    else {
      setLoading(true);
      searchAPI(location.search).then(res => {
        setLoading(false);  
        console.log(res.data);
        setList(res.data.map(item => ({...item, like: false})));
      }).catch(err => {
        alert("불러오기 오류");
      })
     // console.log(JSON.parse(raw));
      //setList(
      //  JSON.parse(raw)
     // )
    }
  }, [location.search, history]);

  console.log(list);


  return (
    <>
    {detail && <CompareStore {...detail} />}
    {loading ?
      <img style={{marginLeft: "600px"}}src={loadingImg} />
      
      :
      <SearchList handleWish={handleWish} handleDetail={handleDetail} list={list}/>
      }
     
    </>
  )
}

export default SearchContainer;




