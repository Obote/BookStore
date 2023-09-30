import "./App.css";
import NavBar from "./component/NavBar";
import BookList from "./component/BookList";
import { Routes, Route } from "react-router-dom";

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
