import React from "react";
import GenreForm from "./GenreForm"
import DisplayGenres from "./DisplayGenres";
import Navbar from "./NavBar"

const genrePage = () => {
    return(
        <div className="genre-page">
            <Navbar />
            <GenreForm />
            <br></br>
            <DisplayGenres />
        </div>
    )
}

export default genrePage;