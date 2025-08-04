import React from 'react';

export default function Question({ question, onAnswer}) {
    function handleAnswerClick(isCorrect) {
        onAnswer(isCorrect)
    }
    return (
         <div>
            <h2>{question.question.text}</h2>
                {question.shuffledAnswers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
                        {answer.text}
                    </button>
                ))}
         </div>
    )
}