import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import Button from '../components/ui/Button';

const DashboardPage = () => {
  const { user, logout } = useAuthContext();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">194</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">194-STS Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Olá, {user?.displayName || user?.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
              >
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bem-vindo ao Dashboard
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card de Estatísticas */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Usuários Ativos</h3>
                <p className="text-3xl font-bold">1,234</p>
                <p className="text-blue-100 text-sm">+12% este mês</p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Projetos</h3>
                <p className="text-3xl font-bold">56</p>
                <p className="text-green-100 text-sm">+8% esta semana</p>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Tarefas</h3>
                <p className="text-3xl font-bold">89</p>
                <p className="text-purple-100 text-sm">+5% hoje</p>
              </div>
            </div>

            {/* Informações do Usuário */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informações da Conta
              </h3>
              <div className="space-y-2">
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">ID:</span> {user?.uid}</p>
                <p><span className="font-medium">Último login:</span> {user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString('pt-BR') : 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage; 