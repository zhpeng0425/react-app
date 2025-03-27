import './ToDoListItem.css';

export default function ToDoListItem({ item, onClick }) {
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
  return (
    <div className={className}>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => {
          onClick(item.id);
        }}
      />
      <div className={item.isDone ? 'text done' : 'text'}>{item.text}</div>
      <button className="btn btn-edit">编辑</button>
      <button className="btn btn-delete">删除</button>
    </div>
  );
}
