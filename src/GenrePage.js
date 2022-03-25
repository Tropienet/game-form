import React from "react";
import GenreForm from "./GenreForm"
import DisplayGenres from "./DisplayGenres";
import Navbar from "./NavBar"

const genrePage = () => {
    return(
        <div className="genre-page">
            <Navbar />
            <h1>This is the game Type page</h1>
            <GenreForm />
            <br></br>
            <DisplayGenres />
        </div>
    )
}

export default genrePage;