import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<BlogList />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
