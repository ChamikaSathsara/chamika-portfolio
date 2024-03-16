import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
// import About from './components/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
