import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 460px;
  border-radius: 20px;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 200px;
  margin-bottom: 40px;
  padding: 10px;
  > div {
    display: flex;
    align-items: center;
    > img {
      height: 50px;
      margin-right: 20px;
      margin-left: 10px;
    }
  }
`;

export const List = styled.div`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
