import type { GuessFeedback } from '@/types'

export function evaluateGuess(guess: number, secretNumber: number): GuessFeedback {
  if (guess < secretNumber) {
    return 'too low'
  }
  if (guess > secretNumber) {
    return 'too high'
  }
  return 'correct'
}