import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ToDoApp from './ToDoApp/ToDoApp.jsx';
import StateManageDemoApp from './StateManageDemo/StateManageDemoApp5.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateManageDemoApp />
  </StrictMode>
);
