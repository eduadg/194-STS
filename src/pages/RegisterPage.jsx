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
  const [acceptTerms, setAcceptTerms] = useState(false);
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

    // Validações
    if (!acceptTerms) {
      setError('Você precisa aceitar os termos de uso');
      setLoading(false);
      return;
    }

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
      <div className="w-full">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="inline-block relative">
            <h1 className="text-5xl font-black tracking-tight mb-2">
              <span className="text-gradient">194-STS</span>
            </h1>
            <div 
              className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60"
              style={{ 
                background: 'linear-gradient(90deg, var(--primary-400), var(--secondary-400))',
                filter: 'blur(4px)'
              }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="glass-card p-8 sm:p-10 animate-scale-in">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Criar nova conta
            </h2>
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>
              Preencha os dados abaixo para começar
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div 
                className="p-4 rounded-lg border text-sm animate-slide-in"
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: 'rgba(239, 68, 68, 0.3)',
                  color: 'var(--error)'
                }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="label">
                  Nome completo
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                  autoFocus
                />
              </div>

              <div>
                <label className="label">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">
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
                  <label className="label">
                    Confirmar senha
                  </label>
                  <PasswordInput
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Digite novamente"
                    required
                    autoComplete="new-password"
                  />
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-2 cursor-pointer"
                style={{ 
                  accentColor: 'var(--primary-500)',
                  borderColor: 'var(--border-secondary)'
                }}
              />
              <label htmlFor="terms" className="text-sm cursor-pointer select-none" style={{ color: 'var(--text-secondary)' }}>
                Eu li e concordo com os{' '}
                <button 
                  type="button"
                  className="font-medium hover:text-white transition-colors"
                  style={{ color: 'var(--primary-400)' }}
                >
                  Termos de Uso
                </button>
                {' '}e a{' '}
                <button 
                  type="button"
                  className="font-medium hover:text-white transition-colors"
                  style={{ color: 'var(--primary-400)' }}
                >
                  Política de Privacidade
                </button>
              </label>
            </div>

            <Button
              type="submit"
              disabled={loading || !acceptTerms}
              className="w-full btn btn-primary h-12 text-base"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <LoadingSpinner size="sm" />
                  <span>Criando conta...</span>
                </div>
              ) : (
                'Criar conta'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: 'var(--border-primary)' }} />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-4" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)' }}>
                ou
              </span>
            </div>
          </div>

          {/* Social Register Options */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full btn btn-secondary h-11 text-sm"
              onClick={() => {
                // TODO: Implementar cadastro com Google
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Cadastrar com Google
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Já tem uma conta?{' '}
              <Link 
                to="/login" 
                className="font-semibold transition-colors hover:text-white"
                style={{ color: 'var(--primary-400)' }}
              >
                Faça login aqui
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