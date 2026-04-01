import './App.css'
import { Navigation } from "./components/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { Following } from "./pages/following.page";
import { Home } from "./pages/home.page";
import { Library } from "./pages/library.page";
import { Profile} from "./pages/profile.page";
import { Stats } from "./pages/stats.page";
import { Stories } from "./pages/stories.page";

function App() {

  return (
    <div className='navbg'>
    <Navigation />
    <Routes>
      <Route path="/library" element={<Library />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/stories" element={<Stories />}/>
      <Route path="/stats" element={<Stats/>}/>
      <Route path="/following" element={<Following />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
    

    </div>
  )
}

export default App
