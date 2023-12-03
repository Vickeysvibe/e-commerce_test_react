import "./App.css";
import {Navbar} from "./assets/navbar";
import{BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import Shop from './pages/shop';
import { Catagory } from "./pages/catagory";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { Login } from "./pages/login";
import Upload from "./Pages/upload";


function App() {
  return (  
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/shop" element={<Catagory/>}/>
        <Route path="/sell" element={<Upload/>}/>
        <Route path="/women" element={<Catagory/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
