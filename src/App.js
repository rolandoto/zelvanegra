import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accommodation from './Page/Accomodation/Accomodation';

function App() {
  return (
      <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Accommodation/> } />
        </Routes> 
      </BrowserRouter>
  );
}

export default App;
