import { useState } from 'react';
import './StateManageDemoApp.css';

export default function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Counter />
        {showB && <Counter />}
      </div>
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        渲染第二个计数器
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);

  let className = 'counter';

  return (
    <div className={className}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>加一</button>
    </div>
  );
}
