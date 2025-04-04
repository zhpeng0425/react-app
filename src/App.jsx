import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StateManageDemoApp from './StateManageDemo/StateManageDemoApp.jsx';
import StateManageDemoApp2 from './StateManageDemo/StateManageDemoApp2.jsx';
import StateManageDemoApp3 from './StateManageDemo/StateManageDemoApp3.jsx';
import StateManageDemoApp4 from './StateManageDemo/StateManageDemoApp4.jsx';
import StateManageDemoApp5 from './StateManageDemo/StateManageDemoApp5.jsx';
import UseStateDemoApp from './HookDemo/UseStateDemoApp.jsx';
import UseReducerDemoApp from './HookDemo/UseReducerDemoApp.jsx';
import UseEffectDemoApp from './HookDemo/UseEffectDemoApp.jsx';
import UseRefDemoApp from './HookDemo/UseRefDemoApp.jsx';

function App() {
  const [demoType, setDemoType] = useState('1');

  const handleChagne = (e) => {
    setDemoType(e.target.value);
  };

  let demo;
  switch (demoType) {
    case '1':
      demo = <StateManageDemoApp />;
      break;
    case '2':
      demo = <StateManageDemoApp2 />;
      break;
    case '3':
      demo = <StateManageDemoApp3 />;
      break;
    case '4':
      demo = <StateManageDemoApp4 />;
      break;
    case '5':
      demo = <StateManageDemoApp5 />;
      break;
    case '6':
      demo = <UseStateDemoApp />;
      break;
    case '7':
      demo = <UseReducerDemoApp />;
      break;
    case '8':
      demo = <UseEffectDemoApp />;
      break;
    case '9':
      demo = <UseRefDemoApp />;
      break;
    default:
      break;
  }
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <select
        style={{
          marginBottom: '10px',
          padding: '5px 0',
          border: '1px solid #ccc',
          outline: 'none',
          borderRadius: '5px',
        }}
        onChange={handleChagne}
      >
        <option value="1">状态与渲染树中的位置相关</option>
        <option value="2">相同位置相同组件，state 保留</option>
        <option value="3">组件在 UI 树中的位置，而不是在 JSX 中的位置</option>
        <option value="4">相同位置不同组件，state 重置</option>
        <option value="5">相同位置相同组件，如何重置 state</option>
        <option value="6">useState示例</option>
        <option value="7">useReducer示例</option>
        <option value="8">useEffect示例</option>
        <option value="9">useRef示例</option>
      </select>
      <div style={{ flex: '1', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>{demo}</div>
    </div>
  );
}

export default App;
