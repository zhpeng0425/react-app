import { useState, useRef } from 'react';
import './HookDemo.css';

export default function UseRefDemoApp() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    inputRef.current.focus();
    inputRef.current.value = count + 1;
  };

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <h1 className="count">{count}</h1>
        <button onClick={handleClick}>加一</button>
      </div>
    </div>
  );
}
