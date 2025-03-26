import ToDoListItem from './ToDoListItem';
import './ToDoList.css';

export default function ToDoList({ title, list, onItemClick }) {
  return (
    <div className="to-do-list-wrapper">
      <div className="to-do-list-header">
        <div className="to-do-list-title">
          {title}
          <span className="to-do-list-size">({list.length})</span>
        </div>
      </div>
      <div className="to-do-list">
        {list.length === 0 ? (
          <ToDoListEmpty />
        ) : (
          list.map((item) => {
            return <ToDoListItem key={item.id} item={item} onClick={onItemClick} />;
          })
        )}
      </div>
    </div>
  );
}

function ToDoListEmpty() {
  return <div className="to-do-list-empty">暂无事项</div>;
}
