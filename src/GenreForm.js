import React, { useState } from "react";
import firebase from "./firebase";
import uniqid from "uniqid";

const DB = firebase.firestore();

const GenreForm = () => {
    const [genre, setGenre] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        if(genre===""||!genre.replace(/\s/g, "").length){
            alert("ERROR! Must enter genre")
            setGenre("");
        }else{
            DB.collection("genre").add({
                id: uniqid(),
                genre: genre,
            })
            .then(() => {
                alert("Genre has been submitted")
            })
            .catch((error) => {
                alert(error.message);
            })
    
            setGenre("");
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
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}>
                    </input>
                </label>
                <button type="submit" className="add-game-type-btn">Add</button>
            </form>
        </div>
    )
}

export default GenreForm;