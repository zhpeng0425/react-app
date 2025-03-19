import React, { useState } from 'react';
import './ToDoApp.css';

// JSX
function ToDoApp() {
    const toDoListData = [
        { id: 1, text: '待办事项1', level: 1, isDone: true },
        { id: 2, text: '待办事项2', level: 2, isDone: false },
        { id: 3, text: '待办事项3', level: 3, isDone: false },
        { id: 4, text: '待办事项4', isDone: false }
    ];

    const [list, setList] = useState(toDoListData);

    const handleClick = (id) => {
        const clickedItem = list.find((item) => item.id === id);
        clickedItem.isDone = !clickedItem.isDone;
        setList([...list]);
    }

    return (
        <div className='to-do-list'>
            {
                list.map((item) => {
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
                        <label className={className} key={item.id}>
                            <input type="checkbox" checked={item.isDone} onChange={() => { handleClick(item.id); }} />
                            <span>{item.text}</span>
                        </label>
                    );
                })
            }
        </div>
    );
}


export default ToDoApp;