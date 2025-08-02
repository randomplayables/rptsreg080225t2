import React from 'react'
import type { Guess } from '@/hooks/useNumberGuessGame'

interface GuessHistoryProps {
  guesses: Guess[]
}

const GuessHistory: React.FC<GuessHistoryProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return <p>No guesses yet.</p>
  }

  return (
    <div>
      <h3>Guess History</h3>
      <ul>
        {guesses.map((g, index) => (
          <li key={index}>
            Guess {index + 1}: {g.guess} – {g.feedback}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuessHistory