import { useState } from "react"

export default function Game(){
    const [gameStart, setGameStart]= useState()
    return(
        
        <>
        <div className="text-center">
            <button className="btn-btn-primary" onClick={startgame}>Start</button>
            <h1>Player 1:</h1>
            <h1>Player 2:</h1>


        </div>
        </>
    )
}