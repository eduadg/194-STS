import React from 'react';
import {
  AnalyticsIcon,
  UserIcon,
  ProjectIcon,
  TaskIcon,
  TrendUpIcon,
  AddIcon,
  EditIcon
} from '../components/ui/Icons';

const DashboardPage = () => {
  const stats = [
    {
      title: 'Total de Projetos',
      value: '24',
      change: '+12%',
      trend: 'up',
      color: 'var(--primary-500)',
      icon: ProjectIcon,
      description: 'Este mês'
    },
    {
      title: 'Tarefas Concluídas',
      value: '128',
      change: '+8%',
      trend: 'up',
      color: 'var(--success)',
      icon: TaskIcon,
      description: 'Esta semana'
    },
    {
      title: 'Usuários Ativos',
      value: '1,234',
      change: '+23%',
      trend: 'up',
      color: 'var(--secondary-500)',
      icon: UserIcon,
      description: 'Últimos 30 dias'
    },
    {
      title: 'Performance',
      value: '94%',
      change: '-2%',
      trend: 'down',
      color: 'var(--warning)',
      icon: AnalyticsIcon,
      description: 'Média mensal'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'Novo projeto criado',
      description: 'Sistema de CRM foi iniciado',
      user: 'João Silva',
      time: '2 min atrás',
      icon: ProjectIcon,
      color: 'var(--primary-500)'
    },
    {
      id: 2,
      title: 'Tarefa concluída',
      description: 'Interface do dashboard finalizada',
      user: 'Maria Santos',
      time: '15 min atrás',
      icon: TaskIcon,
      color: 'var(--success)'
    },
    {
      id: 3,
      title: 'Análise gerada',
      description: 'Relatório mensal disponível',
      user: 'Pedro Costa',
      time: '1 hora atrás',
      icon: AnalyticsIcon,
      color: 'var(--info)'
    },
    {
      id: 4,
      title: 'Usuário adicionado',
      description: 'Novo membro na equipe',
      user: 'Ana Lima',
      time: '2 horas atrás',
      icon: UserIcon,
      color: 'var(--secondary-500)'
    }
  ];

  const projects = [
    { 
      name: 'Sistema de CRM', 
      progress: 75, 
      status: 'Em andamento',
      deadline: '15 Jan',
      team: ['AS', 'JS', 'MC', 'PL'],
      priority: 'high'
    },
    { 
      name: 'App Mobile', 
      progress: 45, 
      status: 'Em desenvolvimento',
      deadline: '28 Jan',
      team: ['JS', 'MC'],
      priority: 'medium'
    },
    { 
      name: 'Website Institucional', 
      progress: 90, 
      status: 'Quase pronto',
      deadline: '10 Jan',
      team: ['AS', 'PL'],
      priority: 'high'
    },
    { 
      name: 'Dashboard Analytics', 
      progress: 30, 
      status: 'Planejamento',
      deadline: '05 Fev',
      team: ['MC', 'JS', 'AS'],
      priority: 'low'
    }
  ];

  const quickActions = [
    { title: 'Novo Projeto', icon: AddIcon, color: 'var(--primary-500)' },
    { title: 'Nova Tarefa', icon: TaskIcon, color: 'var(--secondary-500)' },
    { title: 'Ver Relatórios', icon: TrendUpIcon, color: 'var(--warning)' },
    { title: 'Configurações', icon: EditIcon, color: 'var(--info)' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'var(--error)';
      case 'medium': return 'var(--warning)';
      case 'low': return 'var(--success)';
      default: return 'var(--text-muted)';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'var(--success)';
    if (progress >= 50) return 'var(--warning)';
    return 'var(--primary-500)';
  };

  return (
    <div 
      className="animate-fade-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-8)',
        minHeight: '100%'
      }}
    >
      {/* Page Header */}
      <div 
        style={{ 
          marginBottom: 'var(--space-2)'
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 
              className="text-2xl font-bold mb-2" 
              style={{ color: 'var(--text-primary)' }}
            >
              Bem-vindo de volta! 👋
            </h1>
            <p 
              className="text-base" 
              style={{ color: 'var(--text-muted)' }}
            >
              Aqui está um resumo das suas atividades e métricas principais
            </p>
          </div>
          <button 
            className="btn btn-primary btn-lg"
            style={{ gap: 'var(--space-2)' }}
          >
            <AddIcon size={20} />
            Novo Projeto
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <section>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-2)'
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const animationDelay = `animate-delay-${(index + 1) * 100}`;
            return (
              <div 
                key={index} 
                className={`card-elevated card-interactive animate-slide-in-up ${animationDelay}`}
                style={{
                  padding: 'var(--space-6)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background gradient sutil */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '40%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${stat.color}08, transparent)`,
                    pointerEvents: 'none'
                  }}
                />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${stat.color}30`
                    }}
                  >
                    <IconComponent size={24} style={{ color: stat.color }} />
                  </div>
                  <div className="flex items-center gap-2">
                    {stat.trend === 'up' ? (
                      <svg className="w-4 h-4" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" style={{ color: 'var(--error)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                      </svg>
                    )}
                    <span 
                      className="text-sm font-bold"
                      style={{ color: stat.trend === 'up' ? 'var(--success)' : 'var(--error)' }}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 
                    className="text-3xl font-bold mb-2" 
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {stat.value}
                  </h3>
                  <p 
                    className="text-base font-medium mb-1" 
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {stat.title}
                  </p>
                  <p 
                    className="text-sm" 
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ flex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: 'var(--space-8)',
            alignItems: 'start'
          }}
          className="content-grid"
        >
          {/* Charts and Projects Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {/* Performance Chart */}
            <div className="card-elevated" style={{ padding: 'var(--space-6)' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 
                    className="text-xl font-bold mb-2" 
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Performance Geral
                  </h2>
                  <p 
                    className="text-sm" 
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Acompanhe as métricas principais do sistema
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <select 
                    className="input"
                    style={{ 
                      minWidth: '140px',
                      padding: 'var(--space-2) var(--space-3)',
                      fontSize: '0.875rem'
                    }}
                  >
                    <option>Este mês</option>
                    <option>Último mês</option>
                    <option>Últimos 3 meses</option>
                    <option>Este ano</option>
                  </select>
                  <button className="btn btn-secondary btn-sm">
                    Exportar
                  </button>
                </div>
              </div>

              {/* Chart Placeholder com melhor design */}
              <div 
                className="rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ 
                  height: '320px',
                  background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
                  border: '1px solid var(--border-primary)'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                      radial-gradient(circle at 30% 40%, var(--primary-500)15 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, var(--secondary-500)10 0%, transparent 50%)
                    `
                  }}
                />
                <div className="text-center relative z-10">
                  <AnalyticsIcon size={48} style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }} />
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                    Gráfico de Performance
                  </p>
                  <p style={{ color: 'var(--text-disabled)', fontSize: '0.875rem', marginTop: 'var(--space-2)' }}>
                    Dados em tempo real serão exibidos aqui
                  </p>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-8 mt-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: 'var(--primary-500)' }}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Vendas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: 'var(--secondary-500)' }}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Usuários
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: 'var(--success)' }}
                  />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Conversões
                  </span>
                </div>
              </div>
            </div>

            {/* Projects Overview */}
            <div className="card-elevated" style={{ padding: 'var(--space-6)' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 
                    className="text-xl font-bold mb-2" 
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Projetos em Andamento
                  </h2>
                  <p 
                    className="text-sm" 
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {projects.length} projetos ativos
                  </p>
                </div>
                <button className="btn btn-ghost">
                  Ver todos
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`rounded-xl border transition-all duration-200 hover:border-opacity-60 card-interactive animate-slide-in-right animate-delay-${(index + 1) * 150}`}
                    style={{ 
                      padding: 'var(--space-5)',
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getPriorityColor(project.priority) }}
                          title={`Prioridade ${project.priority}`}
                        />
                        <div>
                          <h4 
                            className="font-semibold text-base" 
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {project.name}
                          </h4>
                          <p 
                            className="text-sm mt-1" 
                            style={{ color: 'var(--text-muted)' }}
                          >
                            Prazo: {project.deadline} • {project.status}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center -space-x-2">
                        {project.team.map((member, idx) => (
                          <div
                            key={idx}
                            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 shadow-sm"
                            style={{
                              backgroundColor: `hsl(${(idx * 60 + 20) % 360}, 65%, 55%)`,
                              borderColor: 'var(--bg-secondary)'
                            }}
                            title={`Membro ${idx + 1}`}
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span 
                          className="text-sm font-medium" 
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          Progresso
                        </span>
                        <span 
                          className="text-sm font-semibold" 
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {project.progress}%
                        </span>
                      </div>
                      <div 
                        className="w-full h-3 rounded-full overflow-hidden"
                        style={{ backgroundColor: 'var(--bg-primary)' }}
                      >
                        <div
                          className="h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${project.progress}%`,
                            background: `linear-gradient(90deg, ${getProgressColor(project.progress)}, ${getProgressColor(project.progress)}cc)`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Recent Activities */}
            <div className="card-elevated" style={{ padding: 'var(--space-6)' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 
                  className="text-lg font-bold" 
                  style={{ color: 'var(--text-primary)' }}
                >
                  Atividades Recentes
                </h3>
                <button 
                  className="text-sm font-medium transition-colors"
                  style={{ 
                    color: 'var(--primary-400)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary-300)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--primary-400)';
                  }}
                >
                  Ver todas
                </button>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {activities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div 
                      key={activity.id} 
                      className={`flex items-start gap-3 group cursor-pointer p-3 rounded-lg transition-all duration-200 animate-fade-in animate-delay-${(index + 1) * 100}`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${activity.color}20`,
                          border: `1px solid ${activity.color}30`
                        }}
                      >
                        <IconComponent size={18} style={{ color: activity.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p 
                          className="font-medium text-sm mb-1" 
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {activity.title}
                        </p>
                        <p 
                          className="text-sm mb-2" 
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span 
                            className="text-xs font-medium" 
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {activity.user}
                          </span>
                          <span 
                            className="text-xs" 
                            style={{ color: 'var(--text-disabled)' }}
                          >
                            •
                          </span>
                          <span 
                            className="text-xs" 
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elevated" style={{ padding: 'var(--space-6)' }}>
              <h3 
                className="text-lg font-bold mb-6" 
                style={{ color: 'var(--text-primary)' }}
              >
                Ações Rápidas
              </h3>
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--space-3)'
                }}
              >
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={index}
                      className="group rounded-xl border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{
                        padding: 'var(--space-4)',
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-primary)',
                        cursor: 'pointer',
                        minHeight: '5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = action.color;
                        e.currentTarget.style.backgroundColor = `${action.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-primary)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                      }}
                    >
                      <IconComponent 
                        size={24} 
                        style={{ color: action.color }} 
                        className="transition-transform group-hover:scale-110"
                      />
                      <p 
                        className="text-sm font-medium text-center" 
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {action.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS responsivo inline */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-6) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;