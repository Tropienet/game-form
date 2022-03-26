import React from "react";
import firebase from "./firebase";

function Game(props) {

    const { gameInfo, fscollection } = props;

    const deleteGame = async(id) => {
        const snapshot = await firebase.firestore().collection(`${fscollection}`)
        .limit(1)
        .where("id", "==", id)
        .get()

        const doc = snapshot.docs[0];
        doc.ref.delete();
        alert("Game has been deleted");
    }

    return (
        <>
            <p>Game Name: {gameInfo.name}</p>
            <p>Game Developer: {gameInfo.developer}</p>
            <p>Game Description: {gameInfo.description}</p>
            <button onClick={() => deleteGame(gameInfo.id)}>Delete game</button>
        </>
    )
}

export default Game;