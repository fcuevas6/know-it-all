import { useState, useEffect } from 'react'
import getQuestions from '../utils/getQuestions'
import Question from './Question'
import { usePlayer } from '../context/PlayerProvider'

export default function GamePlay() {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const { player, score, setScore } = usePlayer()

    useEffect(() => {
        async function fetchQuestions() {
            const qs = await getQuestions()
            setQuestions(qs)
        }
        fetchQuestions()
    }, [])

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1 )
            console.log('Correct answer! Current score:', score + 1)
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    return (
        <div>
            <div>
                <p>Player: {player}</p>
                <p>Score: {score}</p>
            </div>
            {questions.length > 0 && (
                <Question
                key={questions.id}
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                />
            )}
        </div>
    )
}