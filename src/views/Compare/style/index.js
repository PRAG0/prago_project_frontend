import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 150px;
  margin-bottom: 20px;
  background: white;
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 460px;
`;

export const Product = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
`;

export const Stores = styled.div`
  background: #F9F9F9;
  width: 100%;
  height: 100%;
  padding: 40px;
  > div {
    margin: 0 auto;
  }
`

export const Store = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  span {
    color: red;
  }

  .site {
    font-size: 16px;
    font-weight: 500;  
  }
  .price {
    color: red; 
    font-size: 24px;
    font-weight: bold;
  }
`

export const StoreList = styled.div`
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 600px;
  }

  li {
    border-top: 1px solid black;
    display: flex;
    .mall {
      
    }

    .ex_price {

    }

    .total_price {

    }
  }

  li:last-child {
    border-bottom: 1px solid black; 
  }
`