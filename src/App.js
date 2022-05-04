import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layoult/Header/Header';
import Calendario from './pages/Calendario/Calendario';
import Favoritos from './pages/Favoritos/Favoritos';
import Home from './pages/Home'
import Lista from './pages/Lista/Lista';
import PageAnime from './pages/PageAnime/PageAnime';
import PageEpisode from './pages/Episodio/PageEpisode';
import PageLogin from './pages/Auth/PageLogin';
import PageRegister from './pages/Auth/PageRegister';
import PagePefil from './pages/Perfil/PagePerfil';
import PaginaNaoEncontrada from './pages/404/PaginaNaoEncontrada';
import Footer from './components/layoult/Footer/Footer'
import Container from './components/layoult/Container'
import Noticias from './components/layoult/Noticias/Noticias'
import BarraBuscaOverlay from './components/layoult/BarraBuscaOverlay/BarraBuscaOverlay';
import { useState, useEffect } from 'react';
import VisibilityProvider from './context/Visibility';
import UserProfileSearch from './pages/Perfil/UserProfileSearch';
import PageAdmin from './pages/PageAdmin/PageAdmin';

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {UserContext} from "./UserContext"

//funcoes

import {getUser} from './api/user'
import Testes from './pages/Testes/Testes';
import EditarAnime from './pages/PageAdmin/ListAnimesAdmin/EditarAnime/EditarAnime';
import LoginVisibilityProvider from './context/LoginVisibility';
import AuthLoginOverlay from './components/layoult/AuthOverlay/AuthLoginOverlay';


function App() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [banner, setBanner] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [email, setEmail] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
	useEffect(() => {
		const unsubscribe = getUser()
			.then((res) => {
				if (res.error) toast(res.error);
				else{ 
          setUser(res.username); 
          setAvatar(res.userAvatar);
          setBanner(res.userBanner)
          setAdmin(res.isAdmin)
          setEmail(res.email)
          setFavoritos(res.animesFavoritos)
        }
			})
			.catch((err) => toast(err));

		return () => unsubscribe;
	}, []);
  return (
    <Router>
      
      <UserContext.Provider value={{user, setUser, avatar, setAvatar, banner, setBanner, admin, setAdmin, email, setEmail, favoritos, setFavoritos}}>
      
      <LoginVisibilityProvider>
      <AuthLoginOverlay/>
     <VisibilityProvider>
      
     <BarraBuscaOverlay/>
     <Header/>
     
     </VisibilityProvider>
      
      
      
      <ToastContainer toastStyle={{ backgroundColor: "#0C0C1D" }}/>
      
        
        
      <Container customClass="min-height">
        <Noticias />
        
        <Routes>
          
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/anime/:id" element={<PageAnime />}></Route>
          <Route exact path="/anime/:id/:temporada/:ep" element={<PageEpisode />}></Route>
          <Route exact path="/calendario" element={<Calendario />}></Route>
          <Route exact path="/lista" element={<Lista />}></Route>
          <Route exact path="/favoritos" element={<Favoritos />}></Route>
          {/* <Route exact path="/login" element={<PageLogin />}></Route> */}
          <Route exact path="/registrar" element={<PageRegister />}></Route>
          <Route exact path="/perfil" element={<PagePefil />}></Route>
          <Route exact path="/user/:id" element={<UserProfileSearch />}></Route>
          <Route path='*' element={<PaginaNaoEncontrada />}></Route>
          <Route exact path="/admin" element={<PageAdmin />}></Route>
          <Route exact path="/admin/editar/:id" element={<EditarAnime />}></Route>
          <Route exact path="/testes" element={<Testes />}></Route>
          {/* <Route path="/projects" element={}></Route> */}

        </Routes>
      </Container>
      </LoginVisibilityProvider>
      </UserContext.Provider>
      
      
      <Footer />
     
    </Router>
    
  );
}

export default App;
