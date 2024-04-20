import DairyCard from "./Components/DairyCard";
import Farming from "./Components/Farming";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Mycart from "./Screens/Mycart";
import SignUp from "./Screens/SignUp";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
  <>
  
   
 <BrowserRouter>
{/* <Login/> */}
    <Routes>
<Route exact path="/"  element={<Login/>}></Route>
<Route exact path="/Login"  element={<Login/>}></Route>
<Route exact path="/Signup"  element={<SignUp/>}></Route>
<Route exact path="/Home"  element={<Home/>}></Route>
<Route exact path="/Farming"  element={<Farming/>}></Route>
<Route exact path="/DairyCard"  element={<DairyCard/>}></Route>

<Route exact path="/Mycart"  element={<Mycart/>}></Route>



    </Routes>


 </BrowserRouter>
  </>
)}

export default App;
