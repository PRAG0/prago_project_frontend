import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import pragoBlack from '../../../assets/logo/black.png'

const Wrapper = styled.div`
    font-weight: bold;
        font-size: 48px;
    > a {
        font-weight: bold;
        
        text-decoration: none;
        &:visited {
            color: black;
        }    
        &:link {
            color: black;
        }
    }
    margin: 0 auto;
`

const Logo = () => {
    return (
        <Wrapper>
            <Link to="/"><img src={pragoBlack} alt="prago 로고" /></Link>
        </Wrapper>
    )
}

export default Logo;