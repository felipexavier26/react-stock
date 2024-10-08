import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './navbar.css'
import Home from '../components/pages/Home';
import ProductForm from '../components/pages/product/ProductForm';
import ProductList from '../components/pages/product/ProductList';
import ProductDetail from '../components/pages/product/ProductDetail';
import ProductsAtualizar from '../components/pages/product/productsatualizar';
// import ProductDetail from '../Products/ProductDetail'; // Ajuste o caminho conforme necessário
// import ProductsAtualizar from '../Products/ProductsAtualizar'; // Ajuste o caminho conforme necessário
// import ProductsDeletar from '../Products/ProductsDeletar';


function NavBar() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Produtos</Link>
          <Link to="/productsbuscar" className="nav-link">Buscar produto</Link>
          <Link to="/products/add" className="nav-link">Criar produto</Link>


        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="/productsbuscar" element={<ProductDetail />} />
          <Route path="/productsatualizar/:id" element={<ProductsAtualizar />} />

          

          {/*          
          <Route path="/productsatualizar" element={<ProductsAtualizar />} />
          <Route path="/productsdeletar" element={<ProductsDeletar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default NavBar