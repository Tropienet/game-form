import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Game from "./Game";

const db = firebase.firestore();

function DisplayGamesInGenre(props) {

    const [gamesInGenre, setGamesInGenre] = useState([]);

    const { fscollection } = props;

    const ref = db.collection(`${fscollection}`);

    function getGames() {
        
        ref.onSnapshot((querySnapshot) => {
            const games = [];
            querySnapshot.forEach((doc) => {
                games.push(doc.data());
            });
            setGamesInGenre(games);
        })
    }

    useEffect(() => {
        
        getGames();

    });

    return (
        <div>
            <p>{fscollection}</p>
            <ul> This is the list:
                {gamesInGenre.map((game) => (
                    <li key={game.id}>
                        <Game gameInfo={game}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayGamesInGenre;