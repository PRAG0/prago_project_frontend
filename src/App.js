import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import MyPage from "./pages/mypage";
import SearchPage from './pages/searchPage'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/"><MainPage /></Route>
        <Route path="/search"><SearchPage /></Route>
        <Route path="/mypage"><MyPage /></Route>
        
        <Route path="/signup"><LoginContainer /></Route>
        <Route path="/signin"><RegisterContainer /></Route>
      </Switch>
    </>
  );
};

export default App;
