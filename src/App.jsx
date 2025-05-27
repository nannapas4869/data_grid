// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Column_def from './pages/Column_def';
import Column_visible from './pages/Column_visible';
import Row from './pages/Row';
import './index.css'
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Column_def />} />
        <Route path="/column-visible" element={<Column_visible/>} />
        <Route path="/row" element={<Row />} />
      </Routes>
   
  );
}
