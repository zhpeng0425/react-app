import React, { useState } from 'react';
import ToDoList from './components/ToDoList.jsx';
import ToDoItemEditModal from './components/ToDoItemEditModal.jsx';
import './ToDoApp.css';

function ToDoApp() {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const toDoListData = [
    { id: 1, text: '待办事项1', level: 1, isDone: true },
    { id: 2, text: '待办事项2', level: 2, isDone: false },
    { id: 3, text: '待办事项3', level: 3, isDone: false },
    { id: 4, text: '待办事项4', isDone: false },
  ];
  const [list, setList] = useState(toDoListData);

  const handleItemClick = (id) => {
    const clickedItem = list.find((item) => item.id === id);
    clickedItem.isDone = !clickedItem.isDone;
    setList([...list]);
  };

  const handleAddItemClick = () => {
    setAddModalVisible(true);
  };

  const handleAddItemOkClick = (newItem) => {
    let maxId = 0;
    list.map((item) => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    });

    setList([...list, { id: maxId + 1, ...newItem, isDone: false }]);
    setAddModalVisible(false);
  };

  return (
    <>
      <div className="container">
        <ToDoList title="待办" list={list.filter((item) => !item.isDone)} onItemClick={handleItemClick} />
        <button className="btn-add" onClick={handleAddItemClick}>
          添加事项
        </button>
        <ToDoList title="已办" list={list.filter((item) => item.isDone)} onItemClick={handleItemClick} />
      </div>
      <ToDoItemEditModal
        visible={addModalVisible}
        onCancelClick={() => setAddModalVisible(false)}
        onOkClick={handleAddItemOkClick}
      />
    </>
  );
}

export default ToDoApp;
