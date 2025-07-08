import React from 'react';

const UnderConstruction = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-full py-20">
    <div className="text-5xl mb-6">🚧</div>
    <h2 className="text-2xl font-bold text-primary-dark mb-2">{title || 'Página em desenvolvimento'}</h2>
    <p className="text-muted-dark text-lg">Esta funcionalidade estará disponível em breve.</p>
  </div>
);

export default UnderConstruction; 