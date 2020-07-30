import styled from "styled-components";
import signinBg from '../../../../assets/background/signinBg.jpg'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${signinBg});
    display: flex;
`

export const Wrapper = styled.div`
    position: absolute;
    left: 10%;
    top: calc((100% - 600px) / 2);
`;

export const Block = styled.div`
    display: flex;
    margin: 0 auto;
    width: 350px;
    height: 400px;
    max-height: 4 00px;
    background: white;
    border-radius: 25px;
    box-shadow: 0px 6px 6px rgba(0,0,0,0.16);
    padding: 20px;
`


export const ItemBox = styled.div`
  max-width: 350px;
  text-align: center;
  width: 350px;
  padding-left: 30px;
  h2 {
    margin: 0 0 20px 0;
    font-weight: 500;
    .mini {
      font-weight: 100;
      font-size: 12px;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const AuthBox = styled.div`
  max-width: 350px;
  width: 350px;
  h1 {
    margin-bottom: 20px;
    margin-top: 0px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      padding-left: 10px;
      font-size: 20px;
      width: 100%;
      border-radius: 50px;
      height: 35px;
      background-color: #adf5c9;
      margin-bottom: 30px;
      border: 1px solid #707070;
      font-weight: 100;
    }
    button {
      margin-top: 5px;
      font-size: 30px;
      font-weight: bold;
      border: none;
      color: white;
      border-radius: 50px;
      width: 90%;
      height: 40px;
      background: #8dc5a3;
    }
  }
`;

export const Span = styled.span`
  padding: 5px 10px;
  margin: 5px 10px;
  border-radius: 25px;
  border: 1px solid #707070;
  background-color: ${(props) => (props.active ? "#96D3F2" : "#ADF5C9")};
`;
