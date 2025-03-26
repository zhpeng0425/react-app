import React, { useState } from 'react';
import ToDoList from './components/ToDoList';

// JSX
function ToDoApp() {
  const toDoListData = [
    { id: 1, text: '待办事项1', level: 1, isDone: true },
    { id: 2, text: '待办事项2', level: 2, isDone: false },
    { id: 3, text: '待办事项3', level: 3, isDone: false },
    { id: 4, text: '待办事项4', isDone: false },
  ];

  const [list, setList] = useState(toDoListData);

  const handleClick = (id) => {
    const clickedItem = list.find((item) => item.id === id);
    clickedItem.isDone = !clickedItem.isDone;
    setList([...list]);
  };

  return (
    <>
      <RenderDemo />
      <ToDoList title="待办" list={list.filter((item) => !item.isDone)} onItemClick={handleClick} />
      <ToDoList title="已办" list={list.filter((item) => item.isDone)} onItemClick={handleClick} />
    </>
  );
}

export default ToDoApp;

function RenderDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>增加</button>
      </div>
      <input />
    </>
  );
}
