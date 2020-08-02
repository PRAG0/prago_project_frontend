import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
// import Login from "../views/auth/login";

import { changeField, initializeForm, register } from "../redux/modules/auth";
import RegisterPage from "../pages/auth/register";
// import { check } from "../../modules/user";

const RegisterContainer = ({ history }) => {

  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const pattern4 = /[~!@#$%^&*()_+|<>?:{}]/;
    const { value, name } = e.target;
    if(e.target.name === 'id') {
      if(pattern4.test(e.target.value)) {
        alert("ID에는 특수문자가 포함될 수 없습니다.")
        return;
      }
    }
    else if(e.target.name === 'passwordConfirm') {
      if(form.password !== form.passwordConfirm) {
        console.log("Passworld가 일치하지 않습니다.");
      }
    }
    
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    const pattern1 = /[~!@$%^&*_?]/;
    if(form.id.length < 4) {
      alert("ID는 4자 이상이어야 합니다.");
      return;
    }
    if(form.password.length < 8) {
      alert("Password는 8자 이상이어야 합니다.");
      return;
    }
    if(!pattern1.test(form.password)) {
      alert("Password는 [~, !, @, #, $, %, ^, &, *, _, ?] 에서 한 개 이상을 포함해야 합니다.");
      return;
    }
    if(form.password !== form.passwordConfirm) {
      alert("Passworld가 일치하지 않습니다.");
      return;
    }

    e.preventDefault();
    const { id, password, username } = form;
    dispatch(register({ id, password, username }));
    
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError("로그인 실패");
      alert("id 중복. 다른 id를 사용해주세요.");
      return;
    }

    if (auth) {
      history.push('/signup');
    }
  }, [auth, authError, dispatch, user]);

  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [history, user]);

  return (
    <RegisterPage
      onChangeHandle={onChange}
      onSubmitHandle={onSubmit}
      error={error}
      form={form}
    ></RegisterPage>
  );
};
export default withRouter(RegisterContainer);
