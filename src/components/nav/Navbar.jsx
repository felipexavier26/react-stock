// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../../auth/Login';
import Register from '../../auth/Register';
// import Main from './components/Main';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ProductList from './components/Products/ProductList';
// import ProductForm from './components/Products/ProductForm';
// import ProductDetail from './components/Products/ProductDetail'
// import ProductsAtualizar from './components/Products/ProductsAtualizar';
// import ProductsDeletar from './components/Products/ProductsDeletar';

function NavBar() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        {/*<Route path="/products" element={<ProductList />} />
        <Route path="/products/edit/:id" element={<ProductForm />} />
        <Route path="/products/add" element={<ProductForm />} />
        <Route path="/productsbuscar" element={<ProductDetail />} />
        <Route path="/productsatualizar" element={<ProductsAtualizar />} />
        <Route path="/productsdeletar" element={<ProductsDeletar />} /> */}




      </Routes>
    </Router>
  );
}

export default NavBar;
