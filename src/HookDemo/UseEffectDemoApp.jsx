import { useState, useEffect } from 'react';
import './HookDemo.css';

export default function UseEffectDemoApp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffect 执行了');
    document.title = `当前分数：${count1}`;
  }, [count1]);

  return (
    <div>
      <div className="counter-wrapper" style={{ display: 'flex' }}>
        <button className="btn" onClick={() => setCount1(count1 - 1)}>
          -
        </button>
        <span className="count">{count1}</span>
        <button className="btn" onClick={() => setCount1(count1 + 1)}>
          +
        </button>
      </div>
      <div className="counter-wrapper" style={{ display: 'flex', marginTop: '20px' }}>
        <button className="btn" onClick={() => setCount2(count2 - 1)}>
          -
        </button>
        <span className="count">{count2}</span>
        <button className="btn" onClick={() => setCount2(count2 + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
