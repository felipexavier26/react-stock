import React from 'react';
import './Home.css'; // Importando o arquivo CSS
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container-home'>
      <h1>Bem-vindo ao Sistema de Gerenciamento de Estoque</h1>
      <p>
        Nosso sistema foi desenvolvido para facilitar o controle de estoque da sua empresa. Aqui você pode monitorar e gerenciar
        seus produtos de maneira eficiente e organizada. Acompanhe o status de cada item, verifique quantidades disponíveis,
        registre novas entradas e saídas, e obtenha relatórios detalhados para ajudar na tomada de decisões.
      </p>
      <p>
        Com uma interface intuitiva e funcionalidades avançadas, você terá mais visibilidade sobre seus produtos, evitando falta
        ou excesso de estoque e garantindo que o fluxo de mercadorias ocorra sem complicações. Explore as opções de navegação
        para acessar diferentes seções, como cadastro de produtos, histórico de movimentações e muito mais.
      </p>
      <p>
        Estamos aqui para ajudar a otimizar sua gestão de estoque e tornar o processo mais eficiente e seguro. Aproveite todas
        as funcionalidades e mantenha seu estoque sempre sob controle!
      </p>

      <Link to="/products/add" className="btn btn-primary">
        Adicionar Produto
      </Link>
    </div>
  );
}

export default Home;
