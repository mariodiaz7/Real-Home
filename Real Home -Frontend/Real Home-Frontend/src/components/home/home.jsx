import React from 'react';
import fondo from '../../img/fondo.png';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${fondo})` }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white hover:text-yellow-500 transition-transform transform hover:scale-105">Real Home - Ethel Salazar</h1>
      </div>
    </div>
  );
};

export default HomePage;
