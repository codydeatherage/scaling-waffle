import React, { useState, useEffect } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import styled from 'styled-components'
import image from './sample3.jpg'
import Item from '../components/StoreItems/Item'
const Store = () => {
    const items = [
        {
            img: image,
            name: 'Product 1',
            price: '$1.00'
        },
        {
            img: image,
            name: 'Product 2',
            price: '$2.00'
        },
        {
            img: image,
            name: 'Product 3',
            price: '$3.00'
        },
        {
            img: image,
            name: 'Product 4',
            price: '$4.00'
        },
        {
            img: image,
            name: 'Product 5',
            price: '$5.00'
        }
    ]

    return (
        < ItemsContainer >
        {
            items.map(
                (i, index) => {
                    return (
                        <Item
                            img={i.img}
                            itemName={i.name}
                            price={i.price}
                            key={index}
                        ></Item>
                    )
                }
            )
        }
            </ItemsContainer >
    )
}

export default Store

/* const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    background-color: rgb(239,239,239);
 
` */

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
