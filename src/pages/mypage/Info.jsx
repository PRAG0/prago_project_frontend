import React, { useEffect } from "react";
import * as S from "./style/info";
import {useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { editUserInfo, deleteAccount } from "../../lib/api/auth";
import { logout } from "../../redux/modules/auth";

const Info = () => {
  const dispatch = useDispatch()
  const history = useHistory();

  const { auth } = useSelector(({ auth }) => ({
    auth: auth.auth,
  }));
  
  const [form, setForm] = useState({
    password: '',
    name: '',
    newPassword: ''
  })

  const handleChange = (e) => {
    setForm({ ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleDelete = (ev) => {
    ev.preventDefault();
    if(!form.password) {
      alert("Password를 입력해주세요.")
      return;
    }
    deleteAccount(auth.user_id).then((res) => {
      history.push('/');
      alert("회원 탈퇴 완료");
      dispatch(logout());
      localStorage.clear();
    }).catch((err) => {
      alert("삭제 오류");
    });
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(!form.password) {
      alert("Password를 입력해주세요.")
      return;
    }
    editUserInfo({
      user_id: auth.user_id,
      name: form.name,
      password: form.newPassword ? form.newPassword : form.password,
    }).then(res => {
      if(res.status === 200) {
        alert("수정 완료. 변경사항 적용을 위해 다시 로그인합니다.");
        dispatch(logout());
        localStorage.clear();
        history.push('/signup');
      }
      else {
        alert("오류:");
      }
    })
  }

  useEffect(() => {
    if(auth) {
      setForm({...form, name: auth.name});
    }
  }, [auth]);


  return (
    <S.Wrapper>
      <S.Block>
        <div>
          <span>닉네임</span>
          <S.Input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <span>비밀번호</span>
          <S.Input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
          />
        </div>
        <div>
          <span>새 비밀번호</span>
          <S.Input
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            type="password"
          />
        </div>
        <div>

          <S.Button name="save" onClick={handleSubmit}>
            저장
          </S.Button>
        </div>
        <div>
          <S.Button name="leave" onClick={handleDelete}>
            회원탈퇴
          </S.Button>
        </div>
      </S.Block>
    </S.Wrapper>
  );
};

export default Info;
