import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Sleep from "./component/Sleep";
import MeditationComponent from "./component/MeditationComponent";
import Relax from "./component/Relax";
import Settings from "./component/settings/settings";
import Songs from "./component/songs/Songs";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Sleepsong from "./component/songs/Sleepsong";
import Melodies from "./component/Melodies/Melodies";
import Account from "./component/Account/Account";
import Firstpage from "./component/Firstpage/Firstpage";
import Loginpage from "./component/Firstpage/Loginpage";
import Signup from "./component/Firstpage/Signup";
import { useLocation } from "react-router-dom";
import Subscription from "./component/Subscription/Subscription";
import Myfav from "./component/Sleepinnerpage/Myfav";
import Stories from "./component/Sleepinnerpage/Stories";
import Music from "./component/Sleepinnerpage/Music";
import Nature from "./component/meditationinnerpage/Nature";
import Musical from "./component/meditationinnerpage/Musical";
import Category from "./component/meditationinnerpage/Category";
import Favourite from "./component/relaxinnerpage/Favourite";
import Self from "./component/relaxinnerpage/Self";
import Bigginers from "./component/relaxinnerpage/Bigginers";

function App() {
  const location = useLocation();
  const isFirstpage = location.pathname === "/firstpage";
  const isLoginpage = location.pathname === "/login";
  const isSignuppage = location.pathname === "/signup";

  return (
    <div>
      {!isFirstpage && !isLoginpage && !isSignuppage && <Nav />}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/meditation" element={<MeditationComponent />} />
        <Route path="/relax" element={<Relax />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/songs/:id" element={<Songs />} />
        <Route path="/sleepsong/:id" element={<Sleepsong />} />
        <Route path="/melodies" element={<Melodies />} />
        <Route path="/account" element={<Account />} />
        <Route path="/firstpage" element={<Firstpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/myfav" element={<Myfav/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/nature" element={<Nature/>}/>
        <Route path="/musical" element={<Musical/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/fav" element={<Favourite/>}/>
        <Route path="/self" element={<Self/>}/>
        <Route path="/bigginer" element={<Bigginers/>}/>

        

        

      </Routes>
      {!isFirstpage && !isLoginpage && !isSignuppage && <Footer />}
    </div>
  );
}

export default App;
