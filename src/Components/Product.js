import React from 'react'
import { useParams } from 'react-router-dom';

function Product({productsList, addToCart}) {

    let { id } = useParams();
    // const x = (el) => el.id === parseInt(id);
    const product = productsList.find(item => item.id === parseInt(id));

    return (
        <div className="container">
        {console.log(id, productsList, product)}
        {product !== undefined ?
            <div className="row">
                <div className="col">
                    <div>
                        {product.name}
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div>
                        {product.price.toFixed(2)}
                    </div>
                    <button type="button" className="btn btn-outline-primary btn-sm mt-2" onClick={() => addToCart(productsList.findIndex((el) => el.id === parseInt(id)))}>Add to Cart</button>
                </div>
            </div>
            :
            'Page Loading'
        }
        </div>
    )
}

export default Product
