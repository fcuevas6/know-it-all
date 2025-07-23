import React, { useEffect, useState } from "react";

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
    }
    return arr
}

export default function getQuestions(setQuestions) {

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('https://the-trivia-api.com/v2/questions')
                if (!response.ok) {
                    throw new Error("Response was not ok")
                }
                const data = await response.json();
                const shuffledQuestions = data.map(question => {
                    const allAnswers = [...question.incorrectAnswers, question.correctAnswer]
                    const shuffledAnswers = shuffleArray(allAnswers.slice())
                    return {
                        ...question,
                        shuffledAnswers: shuffledAnswers,
                    }
                })
                setQuestions(shuffledQuestions);
            } catch (err) {
                console.log('Error fetching questions:', err);
            }
        }
        fetchQuestions();
    }, [setQuestions])
}