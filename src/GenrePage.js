import React from "react";
import GenreForm from "./GenreForm"
import DisplayGenres from "./DisplayGenres";

const genrePage = () => {
    return(
        <div>
            <h1>This is the game Type page</h1>
            <GenreForm />
            <br></br>
            <DisplayGenres />
        </div>
    )
}

export default genrePage;