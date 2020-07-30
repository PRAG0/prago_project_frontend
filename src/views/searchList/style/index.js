import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-left: 150px;
  background: white;
`;

export const Head = styled.div`
  width: 100%;
  height: 40px;
`;

export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

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