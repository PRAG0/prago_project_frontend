import React from "react";
import Sidebar from "../../components/sidebar";
import * as S from "./style";
import Header from "../../components/header";
import SearchContainer from "../../containers/SearchContainer";

const SearchPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Sidebar />
      <SearchContainer />
    </S.Wrapper>
  );
};

export default SearchPage;