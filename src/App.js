import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layoult/Header';
import Home from './components/pages/Home'
import PageAnime from './components/pages/PageAnime';

function App() {
  return (
  <Router>
    <Header/>

    <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/anime/:id" element={<PageAnime/>}></Route>
        {/* <Route path="/projects" element={}></Route> */}
        </Routes>
        
    </Router>
  );
}

export default App;
