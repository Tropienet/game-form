import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Navbar from "./NavBar";
import DisplayGamesInGenre from "./DisplayGamesInGenre";

let db = firebase.firestore();

const GamesPage = () => {

    const [genres, setGenres] = useState([]);
    const [displayedGenre, setDisplayedGenre] = useState("RPG");

    const ref = db.collection("genre");
    
    function getGenres() {
        
        ref.onSnapshot((querySnapshot) => {
            const genres = [];
            querySnapshot.forEach((doc) => {
                genres.push(doc.data());
            });
            setGenres(genres);
        })
    }

    useEffect(() => {
        
        getGenres();

    });

    return (
        <div className="game-page-container">
            <Navbar />
            <ul className="games-in-genre-list">
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <button onClick={() => setDisplayedGenre(genre.genre)} className="genre-btn">{genre.genre}</button>
                    </li>
                ))}
            </ul>
            <DisplayGamesInGenre fscollection={displayedGenre} />
        </div>
    )
}

export default GamesPage;