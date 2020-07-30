import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 70%;
    max-height: 700px;
    width: 110px;
    background-color: #2DC268;
    border: 1px solid white;
    position: fixed;
    svg {
        position: absolute;
        top: 20px;
        left: 50px;
        height: 50px;
        transform:rotate(10deg)
    }
    .auth {
        color: white;
        font-size: 12px;
        text-align: center;
    }
    a {
        color: white;
    }

`;
  
export const QuickMove = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
`