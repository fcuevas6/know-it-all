import React from 'react'
import { usePlayer } from '../context/PlayerProvider'

export default function Home() {

    const { setPlayer, player, startGame } = usePlayer()

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='text-center p-6 bg-white rounded-2xl border-lime-400 border-4 outline-offset-[6px] outline-4 outline-yellow-300'>
                <h1>Welcome!</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    startGame()}}
                    className='flex flex-col items-center py-16'>
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
        </div>
    )
}