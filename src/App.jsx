import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/navigation/navigation.component";
import { Login } from "./components/login/login.jsx";

import { Home } from "./pages/home.page.jsx";
import { Library } from "./pages/library.page.jsx";
import { Profile } from "./pages/profile.page.jsx";
import { Stories } from "./pages/stories.page.jsx";
import { Stats } from "./pages/stats.page.jsx";
import { Following } from "./pages/following.page.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("user");
  });

  return (
    <>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Navigation
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />

          <div className="navbg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/following" element={<Following />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;