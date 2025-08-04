import React from 'react'
import { usePlayer } from '../context/PlayerProvider'

export default function Home() {

    const { setPlayer, player, startGame } = usePlayer()

    return (
        <div>
            <h1>Welcome!</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                startGame()}}>
                <input
                    type='text'
                    role='Player Name'
                    placeholder='Enter your name'
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}
                    required
                />
                <button type='submit'>Start Game</button>
            </form>
        </div>
    )
}