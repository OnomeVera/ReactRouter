import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
// import About from './components/About.jsx'
// import Navbar from './components/Navbar.js';
import ContactUs from './components/ContactUs';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import { UserContext } from './UserContext';

function App() {
  const name = 'David';

  const user = {
    name: 'David',
    role: 'Instructor'
  };

  return (
    <Router>
      <>
        <Navbar />
        <UserContext.Provider value={user}>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='settings' element={<Settings />} />
              <Route path='userProfile' element={<UserProfile />} />
            </Route>
            {/* <Route path='/About' element={<About about={name} />} /> */}
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
        </UserContext.Provider>
      </>
    </Router>
  );
}

export default App;
