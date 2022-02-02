import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import Home from './pages/Home'
import Store from './pages/Store'
import ItemDetails from './pages/ItemDetails';
import PageWrapper from './components/PageWrapper';
import styled from 'styled-components'
import './App.css'

const App = () => {
  return (

    <Router>
      <PageWrapper>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/store"
            element={<Store />}
          ></Route>
          <Route
            exact
            path="/item/:itemId"
            element={<ItemDetails />}
          ></Route>
        </Routes>
      </PageWrapper>
    </Router>

  );
}


export default App;


const Wrapper = styled.div`
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

