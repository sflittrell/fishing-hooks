import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductsPage from './ProductsPage';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);

  const axiosCall = () => {
    let apiUrl = `https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products`;
    Axios.get(apiUrl).then((response) => {
      setProductsList(response.data)
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(axiosCall, []);

  useEffect(() => {
      let lSCart = window.localStorage.getItem('cart');
      if (lSCart !== cart) {
        setCart(JSON.parse(lSCart));
      }
    }, [])

  const updateCart = (cart) => {
    setCart(cart);
    window.localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(cart);
  }

  const addToCart = (index) => {
    // console.log(cart);
    let temp = cart || [];
    temp.push(productsList[index])
    console.log(temp);
    updateCart(temp);
    // console.log(cart)
  }

  const removeFromCart = (index) => {
    let temp = cart;
    temp.splice(productsList[index], 1);
    updateCart(temp);
  }

  // useEffect(() => {
  //   let lSCart = window.localStorage.getItem('cart');
  //   if (lSCart !== cart) {
  //     setCart(JSON.parse(lSCart));
  //   } else {
  //   }
  //   console.log('log from use effect');
  // }, [productsList])

  //  const updateProducts = () => {
  //   setProductsList()
  //   window.localStorage.setItem('productsList', JSON.stringify(productsList))
  // }

  // useEffect(() => {
  //   console.log('set state')
  //   window.localStorage.setItem('productsList', Jason.stringify(productsList))
  // })



  return (
    <div className="container">
      <Router>
        {/* {console.log(productsList)} */}
        <h1 className="fw-bold">FishHooks Bait and Tackle</h1>
        <Switch>
          {/* <Cart
                key={index}
                index={index}
                cart={cart}
                removeFromCart={removeFromCart}
              /> */}
          <Route path='/productsPage'>
          {productsList.map((productsList, index) =>
            <ProductsPage
              key={index}
              index={index}
              productsList={productsList}
              // cart={cart}
              addToCart={addToCart}
            />
          )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
