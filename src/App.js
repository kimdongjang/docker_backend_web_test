import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Top from './program/Top';
import Forum from './program/forum/Forum';
import Awesome from './program/awesome/Awesome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Top />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/awesome" element={<Awesome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
