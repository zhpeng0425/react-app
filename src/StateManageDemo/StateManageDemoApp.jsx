import { useRef, useState } from 'react';
import './StateManageDemoApp.css';

export default function StateManageDemoApp() {
  const [showB, setShowB] = useState(true);

  let refValue = useRef(0);
  console.log(refValue.current);

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
            refValue.current++;
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

  const handleClick = () => {
    setScore(score + 1);
  };
  return (
    <div className={className}>
      <h1>{score}</h1>
      <button onClick={handleClick}>加一</button>
    </div>
  );
}
