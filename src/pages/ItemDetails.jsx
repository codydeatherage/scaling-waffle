import React from 'react'
import styled from 'styled-components'

const ItemDetails = () => {

    return (
        <ItemsContainer>
            <ItemImg>
                Item Image
            </ItemImg>
            <InfoContainer>
                <h1>Item Name</h1>
                <h1>Price: $1500</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam corporis fuga et aliquam officia, facere quae autem eos laudantium aspernatur sequi reprehenderit neque! Pariatur id inventore molestias consequuntur voluptatum.</p>

                <button>Add to Cart</button>
            </InfoContainer>
        </ItemsContainer>

    )

}

export default ItemDetails;

const ItemImg = styled.div`
    width: 45%;
    height: 45%;
    background-color: gray;
    border: 2px solid red;
`

const InfoContainer = styled.div`
    height: 65%;
    width: 45%;
    background-color: white;
    border: 2px solid blue;
`

const ItemsContainer = styled.div`
    display: flex;
    background-color: black;
    border: 2px solid blue;
    width: 70vw;
    margin: 0 15vw;
    height: 60vh;
    padding: 3%;
    justify-content: space-between;
`

