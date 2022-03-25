import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import uniqid from "uniqid";

const GameInfoForm = () => {

    const [genres, setGenres] = useState([]);

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

    return (
        <div>
            <form>
                <label>
                    Game Name:
                    <input type="text" placeholder="Diable 3, Heartstone, League of legends..."></input>
                </label>
                <label>
                    Developed by:
                    <input type="text" placeholder="Blizzard, Riot, Valve..."></input>
                </label>
                <label>
                    Genre:
                    <select>
                        <option value="">Select a genre</option>
                        {genres.map((genre) => (
                            <option key={genre.id}
                                    value={genre.genre}>
                                        {genre.genre}
                                    </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Add game</button>
            </form>
        </div>
    )
}

export default GameInfoForm;