import React from "react";

function NavBar() {
    return (
        <div className="navbar">
            <a href="/" className="navbar-link home-link">Home</a>
            <div className="navigation-links">
                <a href="/Genre" className="navbar-link">Add Genre</a>
                <a href="/GameForm" className="navbar-link">Add Game</a>
                <a href="/Genre" className="navbar-link">Add Genre</a>
            </div>
        </div>
    )
}

export default NavBar;