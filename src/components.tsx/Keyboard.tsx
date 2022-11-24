import React from 'react';
import styles from './Keyboard.module.css';

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  guessedLetters: string[],
  setGuessedLetters: (letters: string[]) => void,
  wordToGuess: string,
}

const Keyboard = ({ wordToGuess, guessedLetters, setGuessedLetters }: KeyboardProps) => {

  const handleClick = (key: string) => {
    setGuessedLetters([...guessedLetters, key])
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr)',
      gap: '.5rem', 
    }}>
      { KEYS.map(key => {
        return <button 
          className={`${styles.btn} ${guessedLetters.includes(key) ? wordToGuess.includes(key) ? styles.active : styles.inactive : '' }`}
          onClick={() => handleClick(key)}
          disabled={guessedLetters.includes(key)}
          key={key}
        >
          { key.toUpperCase() }
        </button>
      }) }
    </div>
  )
}

export default Keyboard