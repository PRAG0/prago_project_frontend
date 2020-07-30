import styled from "styled-components";

export const ItemBox = styled.div`
  width: 320px;
  height: 360px;
  padding: 20px;
  align-items: center;
  text-align: center;
  img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    > img {
      height: 20px;
      width: 20px;
    }
  }
  span {
    display: inline-block;
    width: 80%;
  }
`;