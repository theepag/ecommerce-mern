import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Products from "./components/Products";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Redirect } from 'react-router';
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=> state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {user ? <Redirect to="/"/> : <Login/> }
          <ProductList/>
        </Route>

        <Route path="/product/:id">
          <Product/>
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/> }
          <Login/>
        </Route>

        <Route path="/register">
        {user ? <Redirect to="/"/> : <Register/> }
          <Register/>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;