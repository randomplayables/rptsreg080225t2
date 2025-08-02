import React from 'react'
import type { Guess } from '@/hooks/useNumberGuessGame'

interface GameStatusProps {
  guesses: Guess[]
  gameOver: boolean
  attempts: number
  resetGame: () => void
}

const GameStatus: React.FC<GameStatusProps> = ({ guesses, gameOver, attempts, resetGame }) => {
  if (!gameOver) {
    return <p>Attempts so far: {attempts}</p>
  }

  return (
    <div>
      <h2>Game Over!</h2>
      {guesses.length > 0 && guesses[guesses.length - 1].feedback === 'correct' ? (
        <p>Congratulations! You guessed the number in {attempts} attempts.</p>
      ) : (
        <p>Game over.</p>
      )}
      <button onClick={resetGame}>Play Again</button>
    </div>
  )
}

export default GameStatus