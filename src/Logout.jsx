// src/components/Auth/Logout.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remova o token do armazenamento local
    navigate('/login'); // Redirecione para a página de login
  };

  return (
    <>
      <button onClick={handleLogout}>Sair</button>
    </>
  );
}

export default Logout;
