import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Search from './search'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 30px auto;
    align-items: center;
`;

const Header = () => {
    const history = useHistory();

    const [value, setValue] = useState('');

    const handleChange = ev => {
        setValue(ev.target.value);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        history.push('/search?query='+value);
    }
    
    return (
        <Wrapper>
            <Logo />
            <Search value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Wrapper>
    )
}

export default Header;
