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
