import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layoult/Header';
import Home from './components/pages/Home'

function App() {
  return (
  <Router>
    <Header/>

    <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>
        {/* <Route path="/projects" element={}></Route> */}
        </Routes>
        
    </Router>
  );
}

export default App;
