import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './components/about'
import Navbar from './components/navbar';
import ContactUs from './components/ContactUs';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
         <Route path='settings' element={<Settings/>}/>
         <Route path='userProfile' element={<UserProfile/>}/>
        
        </Route>

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
