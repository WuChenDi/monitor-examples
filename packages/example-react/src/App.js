import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div className="App">
      <div>
        <Link to={'/page1'}>page1</Link>
         ｜
        <Link to={'/page2'}>page2</Link>
         ｜
        <Link to={'/page3'}>page3</Link>
      </div>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
