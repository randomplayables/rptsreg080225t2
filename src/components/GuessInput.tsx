import React, { useState } from 'react'

export interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled?: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled = false }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const guessNumber = parseInt(inputValue, 10)
    if (!isNaN(guessNumber)) {
      onGuess(guessNumber)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        id="guess-input"
        type="number"
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || inputValue.trim() === ''}>
        Guess
      </button>
    </form>
  )
}

export default GuessInput
