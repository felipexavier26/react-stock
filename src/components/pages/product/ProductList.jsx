import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../../../services/api';
import './ProductList.css';
import { FaTrashAlt } from 'react-icons/fa'; 
import { MdOutlineModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
            });
    }, []);

    function openDelete(productId) {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este produto?');

        if (confirmDelete) {
            deleteProduct(productId)
                .then((response) => {
                    console.log('Produto deletado com sucesso!', response.data);
                    setProducts(products.filter((product) => product.id !== productId));
                })
                .catch((error) => {
                    console.log('Erro ao deletar produto:', error);
                });
        } else {
            console.log('A exclusão foi cancelada.');
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Descrição</td>
                        <td>Valor</td>
                        <td>Quantidades</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>R$ {parseFloat(product.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link to={`/productsatualizar/${product.id}`}>
                                        <MdOutlineModeEdit />
                                    </Link>
                                    <FaTrashAlt
                                        onClick={() => openDelete(product.id)}
                                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">Nenhum produto encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ProductList;
