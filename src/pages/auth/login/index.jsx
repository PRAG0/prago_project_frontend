import React from "react";
import * as S from "./style";
import OrIcon from '../../../assets/svgs/Or.svg'
import person from '../../../assets/icons/person.png'
import key from '../../../assets/icons/key.png'
import { useHistory, Link } from "react-router-dom";
import logo from '../../../assets/logo/black.png';

const RegisterPage = ({ onChange, onSubmit, error, form }) => {
  const history = useHistory();

  return (
    <S.Background>
      
    <S.Wrapper>
    <Link to="/"><img src={logo} alt="로고 이미지" height="50" /></Link>
      <S.Block>

      
      <S.AuthBox>
        <h1>Log In</h1>
        <div>
          <S.Input
           name="id"
           onChange={onChange}
           placeholder="user name"
           value={form.id}
           image={person}
          />
          
          <S.Input
            name="password"
            onChange={onChange}
            value={form.password}
            placeholder="user password"
            image={key}
          />

          <button onClick={onSubmit} className="loginBtn">
            Log In
          </button>

          <S.Or>
          <img src={OrIcon} alt="" />

          </S.Or>
          <button className="signBtn" onClick={() => {history.push('signin')}}>Sign In</button>
        </div>
      </S.AuthBox>
      </S.Block>
    </S.Wrapper>
    </S.Background>
    
  );
};

export default RegisterPage;
