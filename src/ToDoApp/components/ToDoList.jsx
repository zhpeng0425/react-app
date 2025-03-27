import ToDoListHeader from './ToDoListHeader.jsx';
import ToDoListItem from './ToDoListItem.jsx';
import './ToDoList.css';

export default function ToDoList({ title, list, onItemClick }) {
  return (
    <section className="to-do-list-section">
      <ToDoListHeader title={title} size={list.length} />
      <div className="to-do-list">
        {list.map((item) => {
          return <ToDoListItem key={item.id} item={item} onClick={onItemClick} />;
        })}
      </div>
    </section>
  );
}
