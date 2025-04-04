import { useReducer } from 'react';
import './HookDemo.css';

export default function UseReducerDemoApp() {
  const [state, dispatch] = useReducer(reducer, { name: '', count: 1 });

  const handleMinusClick = () => {
    if (state.count >= 1) {
      dispatch({ type: 'decrement' });
    }
  };

  const handleAddClick = () => {
    dispatch({ type: 'increment' });
  };

  const handleNameChange = (e) => {
    dispatch({
      type: 'changeName',
      payload: {
        name: e.target.value,
      },
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          style={{ padding: '5px', marginRight: '20px', border: '1px solid #ccc' }}
          value={state.name}
          onChange={handleNameChange}
        />
        <div className="counter-wrapper">
          <button className="btn" onClick={handleMinusClick}>
            -
          </button>
          <span className="count">{state.count}</span>
          <button className="btn" onClick={handleAddClick}>
            +
          </button>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        当前组件的的 state 值如下： <br />
        name: {state.name} <br />
        count: {state.count}
      </div>
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'changeName':
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

function Counter() {}
