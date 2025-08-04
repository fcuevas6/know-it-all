
import './App.css'
import { PlayerProvider, usePlayer } from './context/PlayerProvider'
import GamePlay from './pages/GamePlay'
import Home from './pages/Home'

function Main() {
  const { gameStarted } = usePlayer()
  return gameStarted ? <GamePlay /> : <Home />
}

function App() {
  return (
    <PlayerProvider>
      <Main />
    </PlayerProvider>
  )
}

export default App
