import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import PasswordInput from '../components/ui/PasswordInput';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { useAuth } from '../hooks/useAuth';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validar senhas
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      await register(formData.email, formData.password, formData.name);
    } catch (err) {
      setError(err.message || 'Erro ao criar conta');
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
            Criar nova conta
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Preencha os dados para se cadastrar
          </p>
        </div>

        {/* Register Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div 
                className="p-4 rounded-lg border text-sm"
                style={{
                  backgroundColor: 'var(--error)' + '10',
                  borderColor: 'var(--error)',
                  color: 'var(--error)'
                }}
              >
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Nome completo
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Mínimo 6 caracteres"
                  required
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Confirmar senha
                </label>
                <PasswordInput
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Digite a senha novamente"
                  required
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="terms"
                required
                className="w-4 h-4 mt-1 rounded border-2"
                style={{ 
                  accentColor: 'var(--primary-500)',
                  borderColor: 'var(--border-primary)'
                }}
              />
              <label htmlFor="terms" className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Eu concordo com os{' '}
                <button 
                  type="button"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--primary-500)' }}
                >
                  Termos de Uso
                </button>
                {' '}e{' '}
                <button 
                  type="button"
                  className="font-medium hover:underline"
                  style={{ color: 'var(--primary-500)' }}
                >
                  Política de Privacidade
                </button>
              </label>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-4 text-base font-semibold"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner size="sm" />
                  Criando conta...
                </div>
              ) : (
                'Criar conta'
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-primary)' }}>
            <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
              Já tem uma conta?{' '}
              <Link 
                to="/login" 
                className="font-semibold hover:underline transition-colors"
                style={{ color: 'var(--primary-500)' }}
              >
                Entre aqui
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

export default RegisterPage; 