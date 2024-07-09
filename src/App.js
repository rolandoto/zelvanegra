import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accommodation from './Page/Accomodation/Accomodation';
import { Provider } from "react-redux";
import store from './Store/Store';
import Checkout from './Page/Checkout/Checkout';
import Home from './Page/Home/Home';
import { AutoProvider } from './UseContext/UseContext';
import NoFound from './Page/NoFound/NoFound';


function App() {
  return (
    <Provider  store={store}>
      <AutoProvider>
      <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Home/> } />
        <Route exact path="/Accomodation" element={<Accommodation/> } />
        <Route exact path="/Checkout" element={<Checkout/> } />
        <Route path='*'  element={<NoFound/> } />
        </Routes> 
      </BrowserRouter>
      </AutoProvider>
      </Provider>
  );
}

export default App;
