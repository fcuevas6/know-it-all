import { createContext, useContext, useState } from "react";

const PlayerContext = createContext()

export function PlayerProvider({ children }) {
    const [player, setPlayer]= useState("")
    const [gameStarted, setGameStarted] = useState(false)
    const [score, setScore] = useState(0)

    function startGame() {
        setGameStarted(true)
        console.log(gameStarted)
    }

    const value = {player, setPlayer, score, setScore, startGame, gameStarted}

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => useContext(PlayerContext)  // useContext hook to access the context