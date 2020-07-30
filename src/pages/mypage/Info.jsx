import React, { useEffect } from "react";
import * as S from "./style/info";
import {useSelector} from 'react-redux'
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Info = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    password: '',
    name: '',
    newPassword: ''
  })
  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));

  useEffect(() => {
    console.log(auth.name);
    setForm({
      ...form,
      name: auth.name})
  }, [auth.name, form])

  const handleChange = (e) => {
    setForm({ ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    Axios.post('/auth', {
      user_id: auth.user_id,
      username: form.name,
      password: form.newPassword
    }).then(res => {
      if(res.status === 200) {
        history.push('/');
      }
    })
  }

  return (
    <S.Wrapper>
      <S.Block>
        <div>
          <span>닉네임</span>
          <S.Input name="name" vlaue={form.name} onChagne={handleChange} />
        </div>
        <div>
          <span>비밀번호</span>
          <S.Input
            name="password"
            vlaue={form.password}
            onChagne={handleChange}
            type="password"
          />
        </div>
        <div>
          <span>새 비밀번호</span>
          <S.Input
            name="newPassword"
            vlaue={form.newPassword}
            onChagne={handleChange}
            type="password"
          />
        </div>
        <div>

          <S.Button name="save" onclick={handleSubmit}>
            저장
          </S.Button>
        </div>
        <div>
          <S.Button name="leave" onclick={handleSubmit}>
            회원탈퇴
          </S.Button>
        </div>
      </S.Block>
    </S.Wrapper>
  );
};

export default Info;
