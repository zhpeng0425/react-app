import { useState } from 'react';
import './StateManageDemoApp.css';

export default function StateManageDemoApp5() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  const handleChangePlayer = () => {
    setIsPlayerA(!isPlayerA);
  };

  return (
    <div>
      {isPlayerA ? <Counter person="玩家A" /> : <Counter person="玩家B" />}
      {/* {isPlayerA && <Counter person="玩家A" />}
      {!isPlayerA && <Counter person="玩家B" />} */}
      {/* {isPlayerA ? <Counter person="玩家A" key="A" /> : <Counter person="玩家B" key="B" />} */}
      <button onClick={handleChangePlayer}>下一位玩家！</button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);

  let className = 'counter';

  return (
    <div className={className}>
      <h1>
        {person} 的分数：{score}
      </h1>
      <button onClick={() => setScore(score + 1)}>加一</button>
    </div>
  );
}
