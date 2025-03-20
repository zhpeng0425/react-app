import React, { useState } from 'react';
import './ToDoApp.css';

function ToDoApp() {
  return (
    <div className="container">
      <section className="to-do-list-section">
        <ToDoListHeader title="待办" />
        <ToDoList />
      </section>
      <section className="to-do-list-section">
        <ToDoListHeader title="已办" />
        <ToDoList />
      </section>
    </div>
  );
}

function ToDoListHeader({ title }) {
  return (
    <div className="to-do-list-header">
      <div className="to-do-list-title">{title}</div>
    </div>
  );
}

function ToDoList() {
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
    <div className="to-do-list">
      {list.map((item) => {
        return <ToDoListItem key={item.id} item={item} onClick={handleClick} />;
      })}
    </div>
  );
}

function ToDoListItem({ item, onClick }) {
  let className = 'to-do-item';
  switch (item.level) {
    case 1:
      className += ' level1';
      break;
    case 2:
      className += ' level2';
      break;
    case 3:
      className += ' level3';
      break;
    default:
      break;
  }
  if (item.isDone) {
    className += ' done';
  }
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => {
          onClick(item.id);
        }}
      />
      <span>{item.text}</span>
    </label>
  );
}

export default ToDoApp;
