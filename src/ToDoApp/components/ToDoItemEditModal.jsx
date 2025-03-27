import { useState } from 'react';

const MAX_SIZE = 100;

export default function ToDoItemEditModal({ visible, defaultItem, onCancelClick, onOkClick }) {
  const [item, setItem] = useState({ text: defaultItem?.text || '', level: defaultItem?.level });
  const [msg, setMsg] = useState('');

  const handleTextChange = (e) => {
    if (item.text.length >= MAX_SIZE) {
      return;
    }
    setItem({
      ...item,
      text: e.target.value,
    });
  };

  const handleLevelChange = (e) => {
    console.log(e);
  };

  const handleOkClick = () => {
    if (!item.text) {
      setMsg('事项内容必须输入。');
      return;
    }
    onOkClick(item);
  };

  return (
    <div className={`modal ${visible ? 'visible' : ''}`}>
      <div className="mask"></div>
      <div className="container">
        <div className="form-item">
          <span className="form-item-name">事项内容</span>
          <div className="form-item-control">
            <textarea rows="10" value={item.text} onChange={handleTextChange}></textarea>
            <div className="font-count">
              {item.text.length}/{MAX_SIZE}
            </div>
            {msg && <div className="msg">{msg}</div>}
          </div>
        </div>
        <div className="form-item">
          <span className="form-item-name">优先级</span>
          <div className="form-item-control">
            <select onChange={handleLevelChange}>
              <option value=""></option>
              <option value="1">高</option>
              <option value="2">中</option>
              <option value="3">低</option>
            </select>
            {/* <label className="radio-wrapper">
              <input type="radio" value="1" />高
            </label>
            <label className="radio-wrapper">
              <input type="radio" value="2" />中
            </label>
            <label className="radio-wrapper">
              <input type="radio" value="3" />低
            </label>
            <label className="radio-wrapper">
              <input type="radio" value="" />
              其他
            </label> */}
          </div>
        </div>
        <div className="footer">
          <button className="btn btn-cancel" onClick={onCancelClick}>
            取消
          </button>
          <button className="btn btn-ok" onClick={handleOkClick}>
            确定
          </button>
        </div>
      </div>
    </div>
  );
}
