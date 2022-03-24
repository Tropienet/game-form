import React, { useState } from "react";
import firebase from "./firebase";
import uniqid from "uniqid";

const DB = firebase.firestore();

const GameTypeForm = () => {
    const [gameType, setGameType] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        if(gameType===""||!gameType.replace(/\s/g, "").length){
            alert("ERROR! Must enter game type")
            setGameType("");
        }else{
            DB.collection("GameType").add({
                id: uniqid(),
                gameType: gameType,
            })
            .then(() => {
                alert("Game type has been submitted")
            })
            .catch((error) => {
                alert(error.message);
            })
    
            setGameType("");
        }
    }

    return (
        <div className="game-type-container">
            <form onSubmit={HandleSubmit} className="game-type-form">
                <label>
                    Game Type 
                    <br></br>
                    <input  type="text"
                            className="game-type-input"
                            placeholder="RPG, Action, Strategy..."
                            value={gameType}
                            onChange={(e) => setGameType(e.target.value)}>
                    </input>
                </label>
                <button type="submit" className="add-game-type-btn">Add</button>
            </form>
        </div>
    )
}

export default GameTypeForm;