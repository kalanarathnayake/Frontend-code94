import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
// import { CreateGroup } from './components/group-add.component';
import ProductList from './components/product-list.component';
import ProductSearchList from './components/product-search.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/product" element={<ProductList />} />
          <Route exact path="/productSearch" element={<ProductSearchList />} />
          {/* <Route exact path="/createproduct" element={<AddPackage />} />Done */}
        </Routes>
      </Router>
    </div>
  );

}

export default App;
