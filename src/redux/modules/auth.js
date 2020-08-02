import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/api/createRequestSaga";
import * as authAPI from "../../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD"; 
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const LOGOUT = "auth/LOGOUT";
const TEMP_SET_AUTH = "auth/TEMP_SET_AUTH";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER"
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN"
);

export const logout = createAction(
  LOGOUT,
)

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

export const register = createAction(
  REGISTER,
  ({ id, password, username }) => ({
    id,
    username,
    password,
  })
);

export const login = createAction(LOGIN, ({ id, password }) => ({
  id,
  password,
}));


export const tempSetAuth = createAction(TEMP_SET_AUTH, ({user_id, name}) => ({
  user_id, name
})) 
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}


const initialState = {
  register: {
    id: "",
    password: "",
    passwordConfirm: "",
    username: "",
  },
  login: {
    id: "",
    password: "",
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      auth: null,
    }),
    [TEMP_SET_AUTH]: (state, { payload: auth }) => ({
      ...state,
      auth,
    })
  },
  initialState
);

export default auth;
