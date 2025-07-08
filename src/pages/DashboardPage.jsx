import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  TrendUpIcon, 
  UserIcon, 
  EyeIcon, 
  ShoppingCartIcon,
  ProjectIcon,
  TaskIcon,
  AddIcon,
  EditIcon
} from '../components/ui/Icons';

const DashboardPage = () => {
  const stats = [
    {
      title: 'Taxa de Conversão',
      value: '98,5%',
      change: '+12.5%',
      icon: TrendUpIcon,
      description: 'Lorem ipsum sit',
      color: 'var(--warning)'
    },
    {
      title: 'Usuários',
      value: '2 481',
      change: '+8.3%',
      icon: UserIcon,
      description: 'Adipiscing elit',
      color: 'var(--info)'
    },
    {
      title: 'Visualizações',
      value: '31 124',
      change: '+23.1%',
      icon: EyeIcon,
      description: 'Sed do eiusmod',
      color: 'var(--secondary-500)'
    },
    {
      title: 'Vendas',
      value: 'R$ 2 125',
      change: '+15.7%',
      icon: ShoppingCartIcon,
      description: 'Tempor incididunt',
      color: 'var(--error)'
    }
  ];

  const metrics = [
    { title: 'Gráfico 1', value: '68K', metric: 'Métrica 1', color: 'var(--primary-500)' },
    { title: 'Gráfico 2', value: '33K', metric: 'Métrica 2', color: 'var(--secondary-500)' },
    { title: 'Gráfico 3', value: '21K', metric: 'Métrica 3', color: 'var(--warning)' },
    { title: 'Gráfico 4', value: '8K', metric: 'Métrica 4', color: 'var(--success)' }
  ];

  const activities = [
    {
      id: 1,
      title: 'Novo projeto criado',
      user: 'Ana Silva',
      time: '2 min atrás',
      icon: ProjectIcon
    },
    {
      id: 2,
      title: 'Tarefa concluída',
      user: 'João Santos',
      time: '15 min atrás',
      icon: TaskIcon
    },
    {
      id: 3,
      title: 'Relatório gerado',
      user: 'Maria Costa',
      time: '1 hora atrás',
      icon: TrendUpIcon
    },
    {
      id: 4,
      title: 'Usuário cadastrado',
      user: 'Pedro Lima',
      time: '2 horas atrás',
      icon: UserIcon
    }
  ];

  const projects = [
    { name: 'Sistema de CRM', progress: 75, status: 'Em andamento' },
    { name: 'App Mobile', progress: 45, status: 'Em desenvolvimento' },
    { name: 'Website Institucional', progress: 90, status: 'Quase pronto' }
  ];

  const quickActions = [
    { title: 'Novo Projeto', icon: AddIcon, action: () => console.log('Novo projeto') },
    { title: 'Editar Perfil', icon: EditIcon, action: () => console.log('Editar perfil') },
    { title: 'Ver Usuários', icon: UserIcon, action: () => console.log('Ver usuários') },
    { title: 'Relatórios', icon: TrendUpIcon, action: () => console.log('Relatórios') }
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen p-8 space-y-8 animate-slide-in">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="card p-6 interactive">
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: stat.color + '20' }}
                  >
                    <IconComponent size={24} style={{ color: stat.color }} />
                  </div>
                  <span 
                    className="text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ 
                      backgroundColor: 'var(--success)' + '20',
                      color: 'var(--success)'
                    }}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {stat.value}
                </h3>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                  {stat.title}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Visão Geral - Gráficos */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Visão Geral
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Acompanhe as métricas principais do seu sistema
                  </p>
                </div>
                <button className="btn btn-primary">
                  Gerar Relatório
                </button>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border"
                    style={{ 
                      backgroundColor: 'var(--bg-elevated)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {metric.title}
                      </h4>
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: metric.color }}
                      ></div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold" style={{ color: metric.color }}>
                        {metric.value}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {metric.metric}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progresso dos Projetos */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Progresso dos Projetos
                </h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          {project.name}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {project.progress}%
                        </span>
                      </div>
                      <div 
                        className="w-full h-2 rounded-full"
                        style={{ backgroundColor: 'var(--bg-elevated)' }}
                      >
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${project.progress}%`,
                            background: `linear-gradient(90deg, var(--primary-500), var(--secondary-500))`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Atividades Recentes */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Atividades Recentes
                </h3>
                <button 
                  className="text-sm"
                  style={{ color: 'var(--primary-500)' }}
                >
                  Ver todas as atividades
                </button>
              </div>
              <div className="space-y-4">
                {activities.map((activity) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--primary-500)' + '20' }}
                      >
                        <IconComponent size={16} style={{ color: 'var(--primary-500)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {activity.title}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          por {activity.user}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
                Ações Rápidas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={action.action}
                      className="p-4 rounded-lg border transition-all duration-200 hover:transform hover:scale-105"
                      style={{
                        backgroundColor: 'var(--bg-elevated)',
                        borderColor: 'var(--border-primary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--primary-500)';
                        e.target.style.backgroundColor = 'var(--primary-500)' + '10';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border-primary)';
                        e.target.style.backgroundColor = 'var(--bg-elevated)';
                      }}
                    >
                      <IconComponent size={20} style={{ color: 'var(--primary-500)' }} />
                      <p className="text-xs mt-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {action.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage; 