import React, {useState} from "react";
import * as S from "./style";
// import ProductList from "../productList";
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import Info from "./Info";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import MyListContainer from '../../containers/MyListContainer';


const MyPage = () => {
  const history = useHistory();
  const [info, setInfo] = useState(true);

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));
  

  if(!auth) {
    alert("로그인 해주세요.")
    history.push('/signup');
  }

  return (
    <S.Wrapper>
      <Header />
      <Sidebar />
      <S.Block>
        <S.Menu>
          <div onClick={() => setInfo(true)} className={info===true && 'active'}>찜 목록 수정</div>
          <div onClick={() => setInfo(false)} className={info===false && 'active'}>회원 정보 수정</div>
        </S.Menu>
        {info ? 
        <>
        <MyListContainer />
          {/* <ProductList title="내기 찜한 목록"/> */}
        </>
        :
          <Info />
      }
    </S.Block>
    </S.Wrapper>
  );
};

export default MyPage;
