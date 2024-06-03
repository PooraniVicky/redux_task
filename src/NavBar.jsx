import React from 'react';

const NavBar = ({totalCartQuantity}) => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    {/* Navbar title */}
                    <a className="navbar-brand" href="#!" id="nav-title">Mobile Store</a>
                    {/* Navbar toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                        {/* Navbar links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" id="ul-texts">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            {/* Dropdown for shop */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li className="dropdown-divider"> <hr></hr></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Cart button with total quantity badge */}
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <span style={{ marginRight: "0.6em" }}><i className="fa-solid fa-cart-shopping"></i></span>
                                <span style={{ marginRight: "0.3em" }}>Cart</span>
                                <span className="badge bg-dark text-white ms-1 rounded-pill" id="count">{totalCartQuantity}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;