import { useState } from 'react'
import { evaluateGuess } from '@/utils/numberGuess'

export type GuessFeedback = 'too low' | 'too high' | 'correct'

export interface Guess {
  guess: number
  feedback: GuessFeedback
}

export function useNumberGuessGame() {
  const [secretNumber, setSecretNumber] = useState<number | null>(null)
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [gameOver, setGameOver] = useState<boolean>(false)

  const pickNumber = (number: number) => {
    setSecretNumber(number)
    setGuesses([])
    setGameOver(false)
  }

  const makeGuess = (guess: number): GuessFeedback | null => {
    if (secretNumber === null || gameOver) return null
    const feedback = evaluateGuess(guess, secretNumber)
    const newGuess: Guess = { guess, feedback }
    setGuesses(prev => [...prev, newGuess])
    if (feedback === 'correct') {
      setGameOver(true)
    }
    return feedback
  }

  const resetGame = () => {
    setSecretNumber(null)
    setGuesses([])
    setGameOver(false)
  }

  return {
    secretNumber,
    guesses,
    gameOver,
    pickNumber,
    makeGuess,
    resetGame,
    attempts: guesses.length
  }
}