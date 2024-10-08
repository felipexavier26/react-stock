import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../../form/Input';
import { updateProduct, getProduct } from '../../../services/api';

function ProductsAtualizar() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        name: '',
        description: '',
        value: '',
        quantity: '',
    });

    // Função para buscar o produto pelo ID ao carregar a página
    useEffect(() => {
        getProduct(id)
            .then((response) => {
                // Formata o valor para exibir como moeda no campo de entrada
                const formattedValue = formatCurrency(response.data.value.toString());
                setProduct({ ...response.data, value: formattedValue });
            })
            .catch((error) => {
                console.error('Erro ao buscar produto:', error);
            });
    }, [id]);

    // Função para formatar o valor como moeda brasileira
    const formatCurrency = (value) => {
        const numericValue = value.replace(/\D/g, '');
        const formattedValue = (Number(numericValue) / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formattedValue;
    };

    // Manipulação de mudança nos campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'value') {
            setProduct({ ...product, [name]: formatCurrency(value) });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    // Manipulação do envio do formulário para atualizar o produto
    function editForm(e) {
        e.preventDefault();

        // Remove "R$", pontos e espaços para converter o valor para número antes de enviar à API
        const cleanValue = parseFloat(
            product.value.replace(/[R$\s.]/g, '').replace(',', '.')
        );

        const updatedProduct = { ...product, value: cleanValue };

        updateProduct(id, updatedProduct)
            .then((response) => {
                console.log('Projeto atualizado com sucesso!', response);
                alert('Produto atualizado com sucesso!');
                navigate('/products');
            })
            .catch((error) => {
                alert('Erro ao atualizar o produto:', error);
            });
    }

    return (
        <>
            <form onSubmit={editForm}>
                <Input
                    type='text'
                    text='Nome do produto'
                    name='name'
                    placeholder='Insira o nome do produto'
                    value={product.name}
                    onChange={handleInputChange}
                />

                <Input
                    type='text'
                    text='Descrição do produto'
                    name='description'
                    placeholder='Insira a descrição'
                    value={product.description}
                    onChange={handleInputChange}
                />

                <Input
                    type='text'
                    text='Valor'
                    name='value'
                    placeholder='Insira o valor'
                    value={product.value}
                    onChange={handleInputChange}
                />

                <Input
                    type='number'
                    text='Quantidades'
                    name='quantity'
                    placeholder='Insira a quantidade'
                    value={product.quantity}
                    onChange={handleInputChange}
                />

                <button className='btn btn-primary'>Gravar</button>
            </form>
        </>
    );
}

export default ProductsAtualizar;
