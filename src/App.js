import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import BookList from './component/BookList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
