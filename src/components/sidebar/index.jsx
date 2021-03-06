import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from './style'
import NameTag from '../../assets/nameTag';
import saleIcon from "../../assets/icons/sale.png";
import starIcon from "../../assets/icons/star.png";
import heartIcon from "../../assets/icons/heart.png";

import {Link} from 'react-router-dom'
import { logout } from "../../redux/modules/auth";
import {useHistory} from 'react-router-dom'
const Sidebar = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { auth } = useSelector(({ auth }) => ({
        auth: auth.auth,
      }));

    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        history.push('/');
    }

    const handleMove = (top, ev) => {
        ev.preventDefault();
        history.push('/')
        window.scrollTo({top: top, left:0, behavior:'auto'});
    }
    
    return (
        <S.Wrapper>
            {
                auth ?
                <Link to="/mypage"><NameTag>{auth.name}님</NameTag></Link>
                :
                <Link to="/signup"><NameTag>로그인</NameTag></Link>
            }

            <S.QuickMove>
                <div onClick={(e) => handleMove(0, e)}><img width="60" src={heartIcon} alt="찜 아이콘" /></div>
                {/* <div onClick={(e) => handleMove(0, e)}><img width="90" src={saleIcon} alt="핫딜 아이콘" /> </div> */}
                <div onClick={(e) => handleMove(500, e)}><img width="80" src={starIcon} alt="추천 아이콘" /></div>
            </S.QuickMove>
            <div className="auth">
            {auth ?
                <span onClick={handleLogout}>로그아웃</span>
            :
                <>
                <Link to="/signin">회원가입</Link> | <Link to="/signup">로그인</Link>
                </>
            }
            </div>
            </S.Wrapper>
    )
}

export default Sidebar;