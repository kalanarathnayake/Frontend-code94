import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ProductList from './components/product-list.component';
import AddProduct from './components/product-add.component';
import EditProduct from './components/product-edit.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/product" element={<ProductList />} />
          <Route exact path="/createproduct" element={<AddProduct />} />
          <Route exact path="/editproduct" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
