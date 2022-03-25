import React, { useEffect, useState } from "react";
import firebase from "./firebase";

function DisplayGenres() {
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
            <p>Genre list:</p>
            {genres.map((genre) => (
                <p key={genre.id}>{genre.genre}</p>
            ))}
        </div>
    )
}

export default DisplayGenres;