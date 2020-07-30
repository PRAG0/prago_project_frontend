import React from "react";
import * as S from "./style";
import logo from '../../../assets/logo/black.png'
import {Link} from 'react-router-dom'

const RegisterPage = ({ onChangeHandle, onSubmitHandle, form, error }) => {
  return (
    <S.Background>
    <S.Wrapper>
    <Link to="/"> <img src={logo} alt="로고 이미지" height="50" /> </Link>
      <S.Block>
      
      <S.AuthBox>
        <h1>Sign In</h1>
        <div>
          <input
            className="id_input"
            name="id"
            onChange={onChangeHandle}
            value={form.id}
            placeholder="user id (2 ~ 12)"
          />
          <input
            className="name_input"
            name="username"
            onChange={onChangeHandle}
            value={form.username}
            placeholder="user name"
          />
          <input
            className="password_input"
            name="password"
            onChange={onChangeHandle}
            value={form.password}
            placeholder="user password (except <, >, (, ), #, ', /, | )"
          />
          <input
            className="password_input"
            name="passwordConfirm"
            onChange={onChangeHandle}
            value={form.passwordConfirm}
            placeholder="check password"
          />
          <button onClick={onSubmitHandle}>Join In</button>
        </div>
      </S.AuthBox>
      </S.Block>
    </S.Wrapper>
    </S.Background>
  );
};

export default RegisterPage;
