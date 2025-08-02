export type Role = 'challenger' | 'guesser'

export type GuessFeedback = 'too low' | 'too high' | 'correct'

export interface Guess {
  guess: number
  feedback: GuessFeedback
}

export type Winner = 'A' | 'B'

export interface GuessRecord extends Guess {
  guesser: Winner
  timestamp: string
}

export interface GameState {
  secretNumber: number | null
  guesses: Guess[]
  gameOver: boolean
  attempts: number
}

export interface SessionData {
  sessionId: string
  [key: string]: any
}

export interface SaveGameDataResponse {
  [key: string]: any
}

export interface GauntletChallenge {
  id: string
  gameId: string
  challengerId: string
  opponentId?: string
  min: number
  max: number
  status: 'pending' | 'active' | 'completed' | 'resolved'
  secretNumber?: number
  turnHistory?: GuessRecord[]
  winner?: Winner
  createdAt: string
  updatedAt: string
}

export interface ResolveChallengeResult {
  success: boolean
  winner: Winner
  [key: string]: any
}

export interface APIError {
  error: string
  [key: string]: any
}