import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import PasswordInput from '../components/ui/PasswordInput';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState('');

  const { login, error, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLocalError('');
    try {
      const result = await login(email, password);
      if (!result.success) {
        setLocalError(result.error || 'Erro ao fazer login');
      }
      // O redirecionamento é feito pelo useEffect
    } catch (err) {
      setLocalError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 className="text-gradient text-4xl font-black tracking-tight mb-2">
              194-STS
            </h1>
            <div 
              className="w-20 h-1 mx-auto rounded-full"
              style={{ background: 'linear-gradient(90deg, var(--primary-500), var(--secondary-500))' }}
            ></div>
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Bem-vindo de volta
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Entre na sua conta para continuar
          </p>
        </div>

        {/* Login Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {(localError || error) && (
              <div 
                className="p-4 rounded-lg border text-sm"
                style={{
                  backgroundColor: 'var(--error)' + '10',
                  borderColor: 'var(--error)',
                  color: 'var(--error)'
                }}
              >
                {localError || error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Senha
                </label>
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-2"
                  style={{ 
                    accentColor: 'var(--primary-500)',
                    borderColor: 'var(--border-primary)'
                  }}
                />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Lembrar de mim
                </span>
              </label>
              <button 
                type="button"
                className="text-sm font-medium hover:underline"
                style={{ color: 'var(--primary-500)' }}
              >
                Esqueceu a senha?
              </button>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-4 text-base font-semibold"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner size="sm" />
                  Entrando...
                </div>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>

          {/* Register Link */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-primary)' }}>
            <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
              Não tem uma conta?{' '}
              <Link 
                to="/register" 
                className="font-semibold hover:underline transition-colors"
                style={{ color: 'var(--primary-500)' }}
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2024 194-STS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage; 