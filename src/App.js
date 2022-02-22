import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './components/layoult/Footer';
import Header from './components/layoult/Header';
import Home from './components/pages/Home'
import PageAnime from './components/pages/PageAnime';
import PaginaNaoEncontrada from './components/pages/PaginaNaoEncontrada';

function App() {
  return (
  <Router>
    <Header/>

    <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/anime/:id" element={<PageAnime/>}></Route>
        <Route path='*' element={<PaginaNaoEncontrada/>}></Route>
        {/* <Route path="/projects" element={}></Route> */}
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
