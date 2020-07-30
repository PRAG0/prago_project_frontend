import styled from 'styled-components'
import signupBg from '../../../../assets/background/signupBg.jpg'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${signupBg});
    display: flex;
`

export const Or = styled.div`
    margin-top:20px;
    img {
        height: 60px;
    }
`

export const Wrapper = styled.div`
    position: absolute;
    right: 10%;
    top: calc((100% - 500px) / 2);
`

export const Block = styled.div`
    display: flex;
    margin: 0 auto;
    width: 350px;
    height: 550px;
    max-height: 400px;
    background: #ADF5C9;
    border-radius: 25px;
    box-shadow: 0px 6px 6px rgba(0,0,0,0.16);
    padding: 20px;
`

export const Input = styled.input`
    background-color: white;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: 5px center;

    box-sizing: border-box;
    outline: none;
    padding-left: 40px;
    font-size: 20px;
    width: 100%;
    border-radius: 50px;
    height: 35px;
    margin-bottom:30px;
    border: 1px solid #707070;
    font-weight: 100;

`

export const ItemBox = styled.div`
    max-width: 350px;
    text-align: center;
    width: 350px;
    padding-left: 30px;
    h2 {
        font-weight: 500;
        .mini {
            font-weight: 100;
            font-size: 12px;
        }
    }
    div {
        display: flex;
        flex-wrap:wrap;
    }

`

export const AuthBox = styled.div`
    max-width:350px;
    width: 350px;
    h1 {
        margin-bottom: 20px;
        margin-top: 0px;
        font-weight: 100;
    }
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        button {
            margin-top: 5px;
            font-size: 30px;
            font-weight: bold;
            border: none;
            color: white;
            border-radius: 50px;
            width: 90%;
            height: 40px;
        }

        .loginBtn {
            background: linear-gradient(#53D686, #38A562);
        }

        .signBtn {
            background: #CAE8D6;
            color: black;
            border: 1px solid #3AFC00;
        }
    }

`

export const Span = styled.span`
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 25px;
    border: 1px solid #707070;
    background-color  : ${props => props.active ? '#96D3F2' : '#ADF5C9'};
`;
