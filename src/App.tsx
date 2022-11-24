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
        Lose Win
      </div>
      <HangManDrawing />
      <HangManWord word={wordToGuess} guessedLetters={guessedLetters} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
      

    </div>
  )
}

export default App
