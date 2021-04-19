import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProductLite from './ProductLite';

function App() {
  const [products, setProducts] = useState([]);

  const axiosCall = () => {
    let apiUrl = `https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products`;
    Axios.get(apiUrl).then((response) => {
      let tempData = response.data.map((obj) => {
        obj.inCart = false;
        return obj;
      })
      setProducts(tempData)
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  useEffect(axiosCall, []);

  // useEffect(() => {
  //   let lSProducts = window.localStorage.getItem('products');
  //   if (lSProducts !== products) {
  //     setProducts(JSON.parse(lSProducts));
  //   } else {
  //   }
  //   console.log('log from use effect');
  // }, [products])

  //  const updateProducts = () => {
  //   setProducts()
  //   window.localStorage.setItem('products', JSON.stringify(products))
  // }

  // useEffect(() => {
  //   console.log('set state')
  //   window.localStorage.setItem('products', Jason.stringify(products))
  // })



  return (
    <div className="container">

      <div>
        <h1 className="fw-bold">FishHooks Bait and Tackle</h1>
        <div className="row">
          <div className="col">
            {products.map((products, index) =>
              <ProductLite
                key={index}
                product={products}
              />
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
