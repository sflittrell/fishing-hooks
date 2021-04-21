function Cart(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <div>
                    Shopping Cart
                </div>
                <div>
                    {props.cart.name}
                </div>
                <div>
                    {props.cart.price}
                </div>
                <div onClick={() => props.removeFromCart(props.index)}>
                    Remove from cart
                </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;