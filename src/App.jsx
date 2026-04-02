import './App.css'
import { Navigation } from "./components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

import { Login } from "./components/login/login";
import { Following } from "./pages/following.page";
import { Home } from "./pages/home.page";
import { Library } from "./pages/library.page";
import { Profile } from "./pages/profile.page";
import { Stats } from "./pages/stats.page";
import { Stories } from "./pages/stories.page";
import { useState } from 'react';

function App() {

 
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("user");
  });

  return (
    <>
      {/*  Navbar gets login state */}
      <Navigation 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />

      {/*  Show login ONLY when logged out */}
      {!isLoggedIn && (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}

      <div className='navbg'>
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/following" element={<Following />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;