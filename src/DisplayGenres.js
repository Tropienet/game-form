import React, { useEffect, useState } from "react";
import firebase from "./firebase";

function DisplayGenres() {

    const [amountOfGenre, setAmountOfGenre] = useState(0);
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

        async function countAmountOfGenres(){
            
            const snapshot = await ref.get();
            const count = snapshot.size;
            setAmountOfGenre(count);

        }

        countAmountOfGenres();
    }

    useEffect(() => {
        
        getGenres();

    });

    return (
        <div className="genre-list-container">
            <p>There is currently {amountOfGenre} genres in the database and they are: </p>
            <ul className="genre-list">
            {genres.map((genre) => (
                <li key={genre.id}><Genre fscollection={genre.genre}/></li>
            ))}
            </ul>
        </div>
    )
}

function Genre(props) {

    const { fscollection } = props;

    const [amountOfGamesInGenre, setAmountOfGamesInGenre] = useState(0);

    const ref = firebase.firestore().collection(`${fscollection}`);
    
    function getAmountOfGamesInGenre() {
        
        ref.onSnapshot((querySnapshot) => {
            const genres = [];
            querySnapshot.forEach((doc) => {
                genres.push(doc.data());
            });
            countAmountOfGamesInGenre();
        })

        async function countAmountOfGamesInGenre(){
            
            const snapshot = await ref.get();
            const count = snapshot.size;
            setAmountOfGamesInGenre(count);

        }
    }

    useEffect(() => {
        
        getAmountOfGamesInGenre();

    });

    return(
        <>
            <p>{fscollection}({amountOfGamesInGenre})</p>
        </>
    )
}

export default DisplayGenres;