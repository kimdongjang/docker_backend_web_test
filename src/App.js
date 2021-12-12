import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Top from './program/Top';
import Forum from './program/forum/Forum';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Top/>} />
          <Route path="/forum" element={<Forum/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
