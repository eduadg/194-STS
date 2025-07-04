# 194-STS - Projeto React + Vite

Este é um projeto React criado com Vite, oferecendo uma configuração moderna e rápida para desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **ESLint** - Linter para JavaScript/React
- **Git** - Controle de versão

## 📋 Tópicos de Configuração do Repositório

### 1. Criação do Repositório Local

```bash
# Inicializar repositório Git local
git init

# Adicionar todos os arquivos ao staging area
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: React + Vite project setup"
```

**Comandos utilizados:**
- `git init` - Cria um novo repositório Git no diretório atual
- `git add .` - Adiciona todos os arquivos modificados ao staging area
- `git commit -m "mensagem"` - Cria um commit com as mudanças

### 2. Criação do Repositório Remoto

```bash
# Criar repositório no GitHub usando GitHub CLI
gh repo create 194-STS --public --source=. --remote=origin --push
```

**Parâmetros utilizados:**
- `194-STS` - Nome do repositório
- `--public` - Repositório público
- `--source=.` - Usar o diretório atual como fonte
- `--remote=origin` - Configurar remote como "origin"
- `--push` - Tentar fazer push automático (opcional)

**Alternativa manual:**
```bash
# Adicionar remote origin
git remote add origin https://github.com/eduadg/194-STS.git
```

### 3. Sincronizando Repositórios

```bash
# Enviar código local para o repositório remoto
git push -u origin master

# Para futuras atualizações
git add .
git commit -m "Descrição das mudanças"
git push
```

**Comandos de sincronização:**
- `git push -u origin master` - Primeiro push, configurando upstream
- `git push` - Enviar commits para o repositório remoto
- `git pull` - Baixar mudanças do repositório remoto
- `git fetch` - Buscar mudanças sem aplicar

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

## 📁 Estrutura do Projeto

```
194-STS/
├── public/          # Arquivos estáticos
├── src/             # Código fonte
│   ├── assets/      # Recursos (imagens, etc.)
│   ├── App.jsx      # Componente principal
│   └── main.jsx     # Ponto de entrada
├── package.json     # Dependências e scripts
├── vite.config.js   # Configuração do Vite
└── README.md        # Este arquivo
```

## 🔗 Links Úteis

- [Repositório no GitHub](https://github.com/eduadg/194-STS)
- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [GitHub CLI](https://cli.github.com/)

---

**Criado com ❤️ usando React + Vite**
