import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import { changeField, initializeForm, login } from "../redux/modules/auth";
import {token} from "../lib/api/client";
// import { check } from "../../modules/user";

const LoginContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ASDSAD");
    const { id, password } = form;
    dispatch(login({ id, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError("로그인 실패");
      return;
    }

    if (auth) {
      token(auth.token);
      history.push('/');
    }
  }, [auth, authError, dispatch, user, history]);

  return (
    <Login
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      form={form}
    ></Login>
  );
};
export default withRouter(LoginContainer);
