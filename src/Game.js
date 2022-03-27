import React from "react";
import firebase from "./firebase";
import { jsPDF } from "jspdf";

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

    function printGameInfo() {
        const doc = new jsPDF();

        doc.text(`Game Name ${gameInfo.name}
                \nGame Developer ${gameInfo.developer}
                \nGame Description ${gameInfo.description}`, 10, 10);

        doc.save(`${gameInfo.name}.pdf`);
    }

    return (
        <>
            <p className="game-name">Game Name: {gameInfo.name}</p>
            <p className="game-developer">Game Developer: {gameInfo.developer}</p>
            <p className="game-desc">Game Description: {gameInfo.description}</p>
            <button onClick={() => deleteGame(gameInfo.id)} className="delete-game-btn">Delete game</button>
            <button onClick={() => printGameInfo()} className="btn">Download pdf about game</button>
        </>
    )
}

export default Game;