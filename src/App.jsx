// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Column_def from './pages/Column_def';
import './index.css'
export default function App() {
  return (
  

      <Routes>
        <Route path="/" element={<Column_def />} />
      </Routes>
   
  );
}
