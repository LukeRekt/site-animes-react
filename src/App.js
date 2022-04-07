import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layoult/Header';
import Calendario from './components/pages/Calendario';
import Favoritos from './components/pages/Favoritos';
import Home from './components/pages/Home'
import Lista from './components/pages/Lista';
import PageAnime from './components/pages/PageAnime';
import PageEpisode from './components/pages/PageEpisode';
import PageLogin from './components/pages/PageLogin';
import PagePefil from './components/pages/PagePerfil';
import PaginaNaoEncontrada from './components/pages/PaginaNaoEncontrada';
import Footer from './components/layoult/Footer'
import Container from './components/layoult/Container'
import Noticias from './components/layoult/Noticias'
import PageRegister from './components/pages/PageRegister';
import BarraBuscaOverlay from './components/layoult/BarraBuscaOverlay';
import { useState, useEffect } from 'react';
import VisibilityProvider from './context/Visibility';

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import {UserContext} from "./UserContext"

//funcoes

import {getUser} from './api/user'
import UserProfileSearch from './components/pages/UserProfileSearch';
import PageAdmin from './components/pages/PageAdmin';

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
          <Route exact path="/login" element={<PageLogin />}></Route>
          <Route exact path="/registrar" element={<PageRegister />}></Route>
          <Route exact path="/perfil" element={<PagePefil />}></Route>
          <Route exact path="/user/:id" element={<UserProfileSearch />}></Route>
          <Route path='*' element={<PaginaNaoEncontrada />}></Route>
          <Route exact path="/admin" element={<PageAdmin />}></Route>
          {/* <Route path="/projects" element={}></Route> */}

        </Routes>
      </Container>
      <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
