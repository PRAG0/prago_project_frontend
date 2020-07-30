// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';


const SearchBox = styled.div`
    width: 80%;
    height: 60px;
    form {
        height: 100%;
    }
`
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    font-size: 24px;
    padding: 10px 30px;
    box-shadow: 1px 3px 6px rgba(0,0,0,0.16);
`

// const RecommendBox = styled.div`
// 	margin-top: 1px;
// 	position: absolute;
// 	background: white;
//     padding: 0 10px;
//     width: 768px;
//     background: #333;
//     color: white;
//     ul {
//         list-style: none;
//         padding: 0;
//             margin: 0;
//         li {
//             padding: 0;
//             margin: 0;
//             height: 60px;
//             border-bottom: 1px solid white;
//             padding: 20px;
//         }
//     }
// `

// const TopRatedList = data => 
// (
//     <ul>
//         {
//         data.map(item => (
//         <li key={item}>{item}</li>
//     )) }
//     </ul>
// )



const Search = ({data, handleSubmit, handleChange, value}) => {
    // const [isFocus, setFocus] = useState(false);

    // const handleFocus = () =>{
    //     setFocus(true);
    // }

    // const handleBlur = () =>{
    //     setFocus(false);
    // }
    return (
    // <SearchBox onFocus={handleFocus} onBlur={handleBlur} >
    <SearchBox >
        <form onSubmit={handleSubmit}>
            <SearchInput placeholder="검색어 입력..." onChange={handleChange} vlaue={value} />
        </form>
        
        {/* {isFocus && <RecommendBox>{TopRatedList(data)}</RecommendBox>} */}
    </SearchBox>
    )
}

export default Search;