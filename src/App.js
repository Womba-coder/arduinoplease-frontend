import { React } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Dashboard from "./components/dashboard";
import Login from './components/login';

function App() {
  
return (
  <div>
    <h1 className="heading">CS Temperature and Humidity portal</h1>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;