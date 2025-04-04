import { useState } from 'react';
import './HookDemo.css';

export default function UseStateDemoApp() {
  const [count, setCount] = useState(0);

  const handleCounterChange = (newCount) => {
    setCount(newCount);
  };

  const handleMinusClick = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const handleAddClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div>
        子组件：
        <Counter defaultCount={count} onChange={handleCounterChange} />
      </div>
      父组件：
      <div className="counter-wrapper" style={{ marginTop: '20px' }}>
        <button className="btn" onClick={handleMinusClick}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="btn" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}

function Counter({ defaultCount, onChange }) {
  const [count, setCount] = useState(defaultCount);

  const handleMinusClick = () => {
    if (count >= 1) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount);
    }
  };

  const handleAddClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div className="counter-wrapper">
      <button className="btn" onClick={handleMinusClick}>
        -
      </button>
      <span className="count">{count}</span>
      <button className="btn" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
}
