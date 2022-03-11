import logo from './logo.svg';
import './App.css';
import Home  from './pages/home/Home';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Navbar1 from './components/navbar/Navbar1';
import Admin from './components/Admin/admin';
import Application from './components/Appform/Application1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Batchmanagerslist from './components/Batchmanagerslist/batchmanagerslist';
import Navbaradmin from './components/Admin/Navbaradmin';
import Courses from './components/Courses/courses';

function App() {
  return (
    <div className="App">
     {/* <Navbar1 /> 
      <Application /> */}
     
     <Navbaradmin/>
     <Admin/>
     {/* <Courses/> */}
     {/* <Batchmanagerslist /> */}
     {/* <Pending/> */}
     {/* <History/> */}
    
     
     
    </div>
  );
}

// function App() {
//   return(
//     <>
//     <Router>
//     <Routes>
//     <Route path="/login" element={< ><Navbar1/><Login  /> </>} />
//     <Route path="/application" element={<> <Navbar1/><Application /> </>} />


//     </Routes>
//     </Router>
//     </>
//   )
// }

export default App;
