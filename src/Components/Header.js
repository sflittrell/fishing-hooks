import React from 'react'
import {Link } from 'react-router-dom';

function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>FishHooks Bait and Tackle</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={'/products/'}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/cart/'}>Shopping Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;