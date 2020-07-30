import React, { useState } from "react";
import styled from "styled-components";
import Main from "../main";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
`;

const Block = styled.div`
  display: flex;
`;

const DeleteButton  = styled.input`
  width: 20px;
  height: 20px;
`;

const Temp = ({ active }) => {
  const [isDelete, deltes] = useState([]);
  const pc = new RTCPeerConnection();

  return (
    <Wrapper>
      <Block>{active && <Main />}
      </Block>
    </Wrapper>
  );
};

export default Temp;
