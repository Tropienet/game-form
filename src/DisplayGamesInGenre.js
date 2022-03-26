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
        <div className="games-collection">
            <p>{fscollection}</p>
            <ul className="displayed-games"> This is the list:
                {gamesInGenre.map((game) => (
                    <li key={game.id} className="game">
                        <Game gameInfo={game} fscollection={fscollection}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DisplayGamesInGenre;