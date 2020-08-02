import styled from "styled-components";

export const ItemBox = styled.div`
  width: 300px;
  height: 360px;
  padding: 20px;
  align-items: center;
  text-align: center;
  z-index: 9999;
  :hover {
    cursor: pointer;
    box-shadow: 6px 6px 2px rgba(0, 0, 0  , .2);
  }
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

  .delete {
    font-size: 20px;
    font-weight: bold;
    width: 20px;
  }
`;