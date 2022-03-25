import React from "react";

function Game(props) {
    const { gameInfo } = props;

    return (
        <>
            <p>Game Name: {gameInfo.name}</p>
            <p>Game Developer: {gameInfo.developer}</p>
            <p>Game Description: {gameInfo.description}</p>
        </>
    )
}

export default Game;