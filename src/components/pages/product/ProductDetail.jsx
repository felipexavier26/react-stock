import React, { useState, useEffect } from 'react';
import { getProducts, getProduct } from '../../../services/api';

function ProductDetail() {
    const [products, setProducts] = useState([]); 
    const [productId, setProductId] = useState(''); 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(''); 

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response.data);
                setFilteredProducts(response.data); 
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
                setError("Erro ao carregar produtos.");
            });
    }, []);

    useEffect(() => {
        if (!productId.trim()) {
            setFilteredProducts(products);
            setError(''); 
        }
    }, [productId, products]);

    const handleSearch = () => {
        if (!productId.trim()) {
            setFilteredProducts(products);
            setError(''); 
            return;
        }

        getProduct(productId)
            .then((response) => {
                setFilteredProducts([response.data]); 
                setError(''); 
            })
            .catch((err) => {
                console.error("Erro ao buscar produto:", err);
                alert("Produto não encontrado."); 
                setFilteredProducts([]); 
            });
    };

    return (
        <>
            <div className='input-btn'>
                <input
                    type="number"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="form-control"
                    placeholder="Digite o ID do produto"
                />
                <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
            </div>

            {error && <div className="alert alert-danger" id='alert'>{error}</div>}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Quantidades</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td> R$ {product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum produto encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ProductDetail;
