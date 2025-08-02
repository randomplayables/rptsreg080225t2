import React, { useState } from 'react'

export interface NumberPickerProps {
  onPick: (secretNumber: number) => void
  min?: number
  max?: number
}

const NumberPicker: React.FC<NumberPickerProps> = ({ onPick, min = 1, max }) => {
  const [value, setValue] = useState<number>(min)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    if (!isNaN(val)) {
      setValue(val)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value >= min && (max === undefined || value <= max)) {
      onPick(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="secret-number-input">Pick a secret number:</label>
      <input
        id="secret-number-input"
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        {...(max !== undefined ? { max } : {})}
      />
      <button type="submit" disabled={value < min || (max !== undefined && value > max)}>
        Confirm
      </button>
    </form>
  )
}

export default NumberPicker