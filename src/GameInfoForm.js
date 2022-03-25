import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import uniqid from "uniqid";
import Navbar from "./NavBar";

let db = firebase.firestore();

const GameInfoForm = () => {

    const [genres, setGenres] = useState([]);
    const [gameGenre, setGameGenre] = useState("");
    const [gameName, setGameName] = useState("");
    const [gameDeveloper, setGameDeveloper] = useState("");
    const [gameDescription, setGameDescription] = useState("");

    const ref = firebase.firestore().collection("genre");
    
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

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection(`${gameGenre}`).add({
            id: uniqid(),
            name: gameName,
            developer: gameDeveloper,
        })
        .then(() => {
            alert("Game has been added");
        })
        .catch((error) => {
            alert(error.message);
        })

        setGameDeveloper("");
        setGameName("");
        setGameGenre("");
    }

    return (
        <div className="game-form-page-container">
            <Navbar />

            <form onSubmit={handleSubmit} className="game-info-form">
                <label>
                    Game Name:
                    <br></br>
                    <input  type="text" 
                            placeholder="Diablo 3, Heartstone, League of legends..."
                            value={gameName}
                            onChange={(e) => setGameName(e.target.value)}></input>
                </label>
                <label>
                    Developed by:
                    <br></br>
                    <input  type="text" 
                            placeholder="Blizzard, Riot, Valve..."
                            value={gameDeveloper}
                            onChange={(e) => setGameDeveloper(e.target.value)}></input>
                </label>
                <label>
                    Genre:
                    <br></br>
                    <select value={gameGenre}
                            onChange={(e) => setGameGenre(e.target.value)}>
                        <option value="">Select a genre</option>
                        {genres.map((genre) => (
                            <option key={genre.id}
                                    value={genre.genre}>
                                        {genre.genre}
                                    </option>
                        ))}
                    </select>
                </label>
                <label>
                    Game Description:
                    <br></br>
                    <textarea   className="game-description"
                                placeholder="Describe the game"
                                value={gameDescription}
                                onChange={(e) => setGameDescription(e.target.value)}>
                    </textarea>
                </label>
                <button type="submit">Add game</button>
            </form>
        </div>
    )
}

export default GameInfoForm;