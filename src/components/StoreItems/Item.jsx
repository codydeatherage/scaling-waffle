import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Item = ({ img, itemName, price }) => {
    const navigate = useNavigate();
    return (
        <Wrapper onClick={()=>navigate('/item/:itemId')}>
            <ItemImg src={img} alt=""></ItemImg>
            <h1>{itemName}</h1>
            <h1>{price}</h1>
        </Wrapper>
    )
}

export default Item

const Wrapper = styled.div`
    text-align: center;
    padding-top: 5px;
    background-color: rgb(239,239,239); 
    cursor: pointer;
`
const ItemImg = styled.img`
    height: 50%;
    width: 50%;
    background-color: blue;
`