import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import Home from './pages/Home'
import Store from './pages/Store'
import ItemDetails from './pages/ItemDetails';
const App = () => {
  return (
    <Router>
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
        element={<ItemDetails/>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
