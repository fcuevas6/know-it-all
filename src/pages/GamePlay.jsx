import React, { useState } from 'react'
import getQuestions from '../utils/getQuestions'
import Question from './Question'

export default function GamePlay() {
    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)

    getQuestions(setQuestions)
    console.log(questions)

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1 )
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    return (
        <div>
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