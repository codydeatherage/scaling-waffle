import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Content>
                <h1 style={{ color: 'white' }}> Welcome to the store</h1>
                <Button onClick={() => { navigate('/store') }}>Enter</Button>
            </Content>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: rgb(24,24,24);
    align-content: center;
    text-align: center;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;

`
const Button = styled.div`
    height: 10vh;
    width: 25vw;
    max-height: 10vh;
    background-color: gray;
    border: 2px solid white;
    margin: auto auto;
    padding-top: 5%;
    cursor: pointer;
`
