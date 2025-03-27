import './ToDoListHeader.css';

export default function ToDoListHeader({ title, size }) {
  return (
    <div className="to-do-list-header">
      <div className="to-do-list-title">
        <span>{title}</span>
        <span style={{ color: '#f00' }}>({size})</span>
      </div>
    </div>
  );
}
