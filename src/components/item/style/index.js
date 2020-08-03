import styled from "styled-components";

export const ItemBox = styled.div`
  width: 300px;
  height: 360px;
  padding: 20px;
  align-items: center;
  text-align: center;
  border-radius: 10px;
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
    /* 한 줄 자르기 */ display: inline-block; width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; /* 여러 줄 자르기 추가 스타일 */ white-space: normal; line-height: 1.2; height: 3.6em; text-align: left; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;

  }

  .delete {
    font-size: 20px;
    font-weight: bold;
    width: 20px;
  }
`;