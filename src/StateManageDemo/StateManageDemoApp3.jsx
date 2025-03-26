import { useState } from 'react';
import './StateManageDemoApp.css';

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={(e) => {
              setIsFancy(e.target.checked);
            }}
          />
          使用好看的样式
        </label>
      </div>
    );
  }
  return (
    <div>
      <Counter isFancy={false} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        使用好看的样式
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);

  let className = 'counter';
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div className={className}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>加一</button>
    </div>
  );
}
