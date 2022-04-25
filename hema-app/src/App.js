import './App.css';

import Main from './Main/Main.js';
import Members from './Members/Members2.js';
import Register from './Register/Register.js';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/members" element={<Members />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
} // 전체 페이지 렌더링 함수

export default App;
