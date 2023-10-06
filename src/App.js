
import './Components/Style.css'
import { Congratulation } from './Components/congratulation/congratulation';
import { Superover } from './Components/superover/superover';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Socialbutton } from './Components/Socialbutton/Socialbutton';
import { Notification } from './Components/Notification/notification';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Login } from './Components/Login/login';
import { Technology } from './Components/Technology/technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/menu';
import { Hooks } from './Components/Hooksassignment/hooksassignment';
import { Jsonassignment } from './Components/jsonassignment/jsonassignment';
import { FruitsCounter } from './Components/Fruitscounter/fruitscounter';
import { Feedback } from './Components/Feedback/feedback';
import { Thankyou } from './Components/Feedback/thankyou';
import { Datefunction } from './Components/Datefunction/datefunction';
import { Home } from './Components/Home/home';
import { Productdisplay } from './Components/jsonassignment/productdisplay';
import { Fetchdata } from './Components/fetchdata/fetchdata';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Menu />, <Home />]}></Route>
          <Route path="/Congratulation" element={[<Menu />, <Congratulation />]}></Route>
          <Route path="/Superover" element={[<Menu />, <Superover />]}></Route>
          <Route path="/Socialbutton" element={[<Menu />, <Socialbutton />]}></Route>
          <Route path="/Notification" element={[<Menu />, <Notification />]}></Route>
          <Route path="/Login" element={[<Menu />, <Login />]}></Route>
          <Route path="/Technology" element={[<Menu />, <Technology />]}></Route>
          <Route path="/Hooksassignment" element={[<Menu />, <Hooks />]}></Route>
          <Route path="/Jsonassignment" element={[<Menu />, <Jsonassignment />]}></Route>
          <Route path="/Fruitcounter" element={[<Menu />, <FruitsCounter />]}></Route>
          <Route path="/Feedback" element={[<Menu />, <Feedback />]}></Route>
          <Route path="/Thankyou" element={[<Menu />, <Thankyou />]}></Route>
          <Route path="/Datefunction" element={[<Menu />, <Datefunction />]}></Route>
          <Route path="/display/:id" element={[<Menu />, <Productdisplay />]}></Route>
          <Route path="/fetchdata" element={[<Menu />, <Fetchdata />]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
