import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import Footer from './components/layoult/Footer';
import Header from './components/layoult/Header';
import Calendario from './components/pages/Calendario';
import Favoritos from './components/pages/Favoritos';
import Home from './components/pages/Home'
import Lista from './components/pages/Lista';
import PageAnime from './components/pages/PageAnime';
import PageLogin from './components/pages/PageLogin';
import PagePefil from './components/pages/PagePerfil';
import PaginaNaoEncontrada from './components/pages/PaginaNaoEncontrada';

function App() {
  return (
  <Router>
    <Header/>

    <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/anime/:id" element={<PageAnime/>}></Route>
        <Route exact path="/calendario" element={<Calendario/>}></Route>
        <Route exact path="/lista" element={<Lista/>}></Route>
        <Route exact path="/favoritos" element={<Favoritos/>}></Route>
        <Route exact path="/login" element={<PageLogin/>}></Route>
        <Route exact path="/perfil" element={<PagePefil/>}></Route>
        <Route path='*' element={<PaginaNaoEncontrada/>}></Route>
        {/* <Route path="/projects" element={}></Route> */}
        </Routes>
        
    </Router>
  );
}

export default App;
