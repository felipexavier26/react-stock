import React, { useState } from 'react';
import './productform.css';
import Input from '../../form/Input';
import { createProduct } from '../../../services/api';

function ProductForm() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        value: '',
        quantity: '',
    });

    const formatCurrency = (value) => {
        const numericValue = value.replace(/\D/g, '');
        const formattedValue = (Number(numericValue) / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formattedValue;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'value') {
            setProduct({ ...product, [name]: formatCurrency(value) });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const cleanValue = parseFloat(
            product.value.replace(/[R$\s.]/g, '').replace(',', '.')
        );

        const productData = { ...product, value: cleanValue };

        createProduct(productData)
            .then((response) => {
                console.log('Produto criado com sucesso:', response.data);
                alert('Produto criado com sucesso:')
                setProduct({ name: '', description: '', value: '', quantity: '' });
            })
            .catch((error) => {
                alert('Erro ao criar produto:', error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    text='Nome do produto'
                    name='name'
                    placeholder='Insira o nome do produto'
                    value={product.name}
                    onChange={handleChange}
                />

                <Input
                    type='text'
                    text='Descrição do produto'
                    name='description'
                    placeholder='Insira a descrição'
                    value={product.description}
                    onChange={handleChange}
                />

                <Input
                    type='text'
                    text='Valor'
                    name='value'
                    placeholder='Insira o valor'
                    value={product.value}
                    onChange={handleChange}
                />

                <Input
                    type='number'
                    text='Quantidade'
                    name='quantity'
                    placeholder='Insira a quantidade'
                    value={product.quantity}
                    onChange={handleChange}
                />

                <button className='btn btn-primary'>Gravar</button>
            </form>
        </>
    );
}

export default ProductForm;
