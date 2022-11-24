import react, { useState } from 'react';
import HangManDrawing from './components.tsx/HangManDrawing';
import HangManWord from './components.tsx/HangManWord';
import Keyboard from './components.tsx/Keyboard';
import words from './wordList.json';

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  let hasLost, hasWon = false;

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
  const checkIfWon = (letter: string) => guessedLetters.includes(letter);    

  const initializeGame = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    hasLost = hasWon = false;
  }
  

  if(incorrectLetters.length >= 6) {
    hasLost = true;
  }

  if(wordToGuess.split("").every(checkIfWon)) {
    hasWon = true;
  }

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        { hasLost && <span> You lost ... the word to guess was {wordToGuess}</span> }
        { hasWon && <span> You win ... in {guessedLetters.length} guesses !</span> }
      </div>
      <HangManDrawing incorrectGuesses={incorrectLetters.length} />
      <HangManWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div style={{ alignSelf: 'stretch' }}>
        { !hasLost && !hasWon && (
          <Keyboard wordToGuess={wordToGuess} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
        )}
      </div>
      <div>{(hasLost || hasWon) && (
        <button style={{ cursor: 'pointer', background: 'none', padding: '0.5em', fontSize: '2rem' }} onClick={initializeGame}>
          { hasLost ? 'Try Again' : 'Restart'}
        </button>
      )}</div>
    </div>
  )
}

export default App
