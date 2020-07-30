import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
`;

export const Menu = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  padding: 0 50px;

  div {
    padding: 5px 10px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 20px;
  }

  div:last-child {
    margin: 0 0 0 30px;
  }

  .active {
    background: #2DC268;
    color: white;
    border: 1px solid #56ff99;
  }
`

export const Block = styled.div`
  width: 100%;
  border-radius: 20px;
  background: white;
  /* background: rgba(255,255,255,0.8); */
  margin-left: 200px;
  margin-bottom: 40px;
  padding: 10px;
`;
