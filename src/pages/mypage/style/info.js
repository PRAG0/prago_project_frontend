import styled from "styled-components";

export const Wrapper = styled.div`
 
`;

export const Block = styled.div`
  margin: 0 auto;
  display: grid;
  width: 500px;
  div {
    vertical-align: middle;
    margin-bottom: 10px;
    > span {
      display: inline-block;
      width: 200px;
      font-size: 20px;
    }
  }
`;

export const Input = styled.input`
  text-align: center;
  height: 50px;
  width: 250px;
  border-radius: 25px;
  font-size: 20px;
`;

export const Button = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 25px;
  font-size: 20px;
  display: inline-block;
`;
