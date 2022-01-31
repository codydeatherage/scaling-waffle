import React from 'react'
import styled from 'styled-components'
import image from './sample3.jpg'
import Item from '../components/StoreItems/Item'
const Store = () => {

    const items = [
        {
            img: image,
            name: 'Product 1',
            price: '$3.00'
        },
        {
            img: image,
            name: 'Product 2',
            price: '$3.00'
        },
        {
            img: image,
            name: 'Product 3',
            price: '$3.00'
        },
        {
            img: image,
            name: 'Product 4',
            price: '$3.00'
        },
        {
            img: image,
            name: 'Product 5',
            price: '$3.00'
        }
    ]
    return (
        <Container>
            <StoreHeader>
                <h1>THE STORE</h1>
            </StoreHeader>
            {/* <Filter>FILTERS WILL GO HERE</Filter> */}
            <ItemsContainer>
                {items.map((i, index) => {
                    return (
                        <Item
                            img={i.img}
                            itemName={i.name}
                            price={i.price}
                            key={index}
                        ></Item>)
                })}
            </ItemsContainer>
        </Container>

    )
}

export default Store

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
    background-color: rgb(239,239,239);
    top: 0;
`

const StoreHeader = styled.div`
    width: 70vw;
    height: 20vh;
    margin: 0 15vw;
    text-align: center;
    background-color: white;
    border-radius: 15px;
`

const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30vh;
    column-gap: 5%;
    row-gap: 5%;
    background-color: white;
    width: 70vw;
    margin: 0 15vw;
    margin-top: 5%;
    height: 90%;
    padding: 5%;

`
