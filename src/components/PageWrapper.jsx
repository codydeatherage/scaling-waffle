import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CartFill } from 'react-bootstrap-icons'

const PageWrapper = ({ children }) => {

    return (
        <>
            <Wrapper>
                <StoreHeader>
                    <h1>THE STORE</h1>
                    <CartFill style={{ alignSelf: 'end' }} size={40} />
                </StoreHeader>
            </Wrapper>

            <Container>{children}</Container>

        </>
    );
}

export default PageWrapper;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    background-color: rgb(239,239,239);
    top: 0;
    padding-bottom: 5%;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    background-color: rgb(239,239,239);
`

const StoreHeader = styled.div`
    width: 70vw;
    height: 20vh;
    margin: 0 15vw;
    text-align: center;
    background-color: white;
    border-radius: 15px;
`