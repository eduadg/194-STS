# 194-STS - Sistema de Gestão Moderno

Este é um projeto React moderno criado com Vite, oferecendo uma interface de usuário elegante e profissional com tema escuro e componentes reutilizáveis.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS 4** - Framework CSS utilitário
- **Firebase** - Backend como serviço (Auth, Firestore)
- **React Router DOM** - Roteamento para aplicações React
- **ESLint** - Linter para JavaScript/React

## 🎨 Design System

O projeto utiliza um sistema de design moderno com:

- **Tema escuro profissional** com cores azul escuro e verde-azul
- **Componentes reutilizáveis** (Button, Input, Card, etc.)
- **Ícones SVG customizados** para melhor performance
- **Animações suaves** e transições elegantes
- **Layout responsivo** para todos os dispositivos

## 🔧 Correções Implementadas

### Duplicações Removidas
- ✅ **Estilos CSS duplicados** - Removidos conflitos entre `App.css` e `theme-modern.css`
- ✅ **Arquivos de rotas duplicados** - Removido `src/routes/index.jsx`
- ✅ **Classes CSS conflitantes** - Ajustados componentes para usar apenas estilos do sistema de design

### Configurações Otimizadas
- ✅ **Tailwind CSS** - Configurado para trabalhar em harmonia com estilos customizados
- ✅ **PostCSS** - Configurado com autoprefixer
- ✅ **ESLint** - Regras melhoradas para qualidade de código
- ✅ **Vite** - Configuração otimizada para desenvolvimento

### Estrutura Melhorada
- ✅ **Constantes de rotas** - Centralizadas em `src/routes/constants.js`
- ✅ **Hooks customizados** - Melhorados com TypeScript JSDoc
- ✅ **Serviços** - Documentação melhorada com comentários
- ✅ **Contextos** - Organização e comentários aprimorados

## 📋 Estrutura do Projeto

```
194-STS/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   └── ui/         # Componentes de interface
│   ├── contexts/        # Contextos React (Auth)
│   ├── hooks/          # Hooks customizados
│   ├── layouts/        # Layouts da aplicação
│   ├── pages/          # Páginas da aplicação
│   ├── routes/         # Configuração de rotas
│   ├── services/       # Serviços (Firebase)
│   ├── config/         # Configurações (Firebase)
│   ├── assets/         # Recursos estáticos
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Ponto de entrada
│   ├── index.css       # Estilos globais
│   ├── theme-modern.css # Sistema de design
│   └── App.css         # Estilos básicos
├── package.json        # Dependências e scripts
├── vite.config.js      # Configuração do Vite
├── tailwind.config.js  # Configuração do Tailwind
├── postcss.config.js   # Configuração do PostCSS
└── eslint.config.js    # Configuração do ESLint
```

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint

# Formatação de código
npm run format

# Limpar cache
npm run clean
```

### Git
```bash
# Verificar status
git status

# Ver histórico de commits
git log --oneline

# Ver branches
git branch -a

# Criar nova branch
git checkout -b nome-da-branch

# Mudar de branch
git checkout nome-da-branch
```

## 🎯 Funcionalidades

- **Autenticação** - Login/Registro com Firebase Auth
- **Dashboard** - Métricas e estatísticas em tempo real
- **Navegação** - Sidebar colapsável e header moderno
- **Responsividade** - Interface adaptável para mobile
- **Tema escuro** - Design profissional e moderno

## 🔧 Configurações

### Firebase
O projeto está configurado com Firebase para:
- Autenticação de usuários
- Armazenamento de dados (Firestore)
- Analytics (opcional)

### Tailwind CSS
Configurado para trabalhar em harmonia com o sistema de design customizado:
- Variáveis CSS integradas
- Preflight desabilitado para evitar conflitos
- Classes utilitárias disponíveis

### Sistema de Design
- **Variáveis CSS** - Centralizadas em `theme-modern.css`
- **Componentes** - Reutilizáveis e consistentes
- **Animações** - Suaves e performáticas
- **Responsividade** - Mobile-first approach

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Os arquivos estarão em dist/
```

## 🔗 Links Úteis

- [Repositório no GitHub](https://github.com/eduadg/194-STS)
- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Documentação do Firebase](https://firebase.google.com/docs)

---

**Criado com ❤️ usando React + Vite + Tailwind CSS**
