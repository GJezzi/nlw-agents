# NLW Agents

*[🇺🇸 English](#english) | [🇧🇷 Português](#português)*

---

## English

### 📖 About

**NLW Agents** is a full-stack application developed during a **Rocketseat** event as part of the Next Level Week (NLW) program. This monorepo demonstrates modern development practices using Node.js/TypeScript for the backend and React/Vite for the frontend.

### 🏗️ Project Structure

```
nlw-agents/
├── back/          # Backend API (Node.js + Fastify + TypeScript)
├── web/           # Frontend application (React + Vite + TypeScript)
└── README.md      # This file
```

### 🚀 Tech Stack

#### **Backend (API)**
- **Runtime**: Node.js with native TypeScript support
- **Framework**: Fastify - High-performance web framework
- **Database**: PostgreSQL with pgvector extension
- **ORM**: Drizzle ORM with schema migrations
- **Validation**: Zod for schema validation
- **Code Quality**: Biome + Ultracite for linting and formatting
- **Containerization**: Docker Compose for local development

#### **Frontend (Web)**
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.3
- **State Management**: TanStack React Query 5.83.0
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

### 🛠️ Getting Started

#### **Prerequisites**
- Node.js (v18 or higher)
- npm, yarn, or pnpm
- Docker and Docker Compose

#### **1. Clone the repository**
```bash
git clone <repository-url>
cd nlw-agents
```

#### **2. Backend Setup**
```bash
cd back

# Install dependencies
npm install

# Create environment file
# Create a .env file with:
# PORT=3333
# DATABASE_URL=postgresql://postgres:postgres@localhost:5432/agents

# Start the database
docker-compose up -d

# Run database migrations
npx drizzle-kit migrate

# Seed the database (optional)
npm run db:seed

# Start the development server
npm run dev
```

The API will be available at `http://localhost:3333`

#### **3. Frontend Setup**
```bash
cd web

# Install dependencies
npm install

# Start the development server
npm run dev
```

The web application will be available at `http://localhost:5173`

### 📊 Available Scripts

#### **Backend**
- `npm run dev` - Start development server with watch mode
- `npm start` - Start production server
- `npm run db:seed` - Run database seeding
- `npx drizzle-kit generate` - Generate new migrations
- `npx drizzle-kit migrate` - Run pending migrations
- `npx drizzle-kit studio` - Open Drizzle Studio (database GUI)

#### **Frontend**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### 🔗 API Endpoints

- `GET /health` - Health check endpoint
- `GET /rooms` - List all rooms
- `POST /rooms` - Create a new room
- `GET /rooms/:id/questions` - Get room questions
- `POST /rooms/:id/questions` - Create a question in a room

### 🏗️ Architecture & Patterns

#### **Backend**
- RESTful API design
- Type-safe development with TypeScript
- Schema-first approach with Zod validation
- Database migrations with Drizzle Kit
- Environment validation for configuration
- CORS configuration for cross-origin requests
- Modular routing structure

#### **Frontend**
- Component composition using Radix UI primitives
- Utility-first CSS with Tailwind CSS
- Type safety with comprehensive TypeScript configuration
- Client-side routing with React Router
- Server state management with TanStack React Query
- Responsive design with mobile-first approach
- WCAG compliant components following accessibility rules

---

## Português

### 📖 Sobre

**NLW Agents** é uma aplicação full-stack desenvolvida durante um evento da **Rocketseat** como parte do programa Next Level Week (NLW). Este monorepo demonstra práticas modernas de desenvolvimento usando Node.js/TypeScript para o backend e React/Vite para o frontend.

### 🏗️ Estrutura do Projeto

```
nlw-agents/
├── back/          # API Backend (Node.js + Fastify + TypeScript)
├── web/           # Aplicação Frontend (React + Vite + TypeScript)
└── README.md      # Este arquivo
```

### 🚀 Stack Tecnológica

#### **Backend (API)**
- **Runtime**: Node.js com suporte nativo ao TypeScript
- **Framework**: Fastify - Framework web de alta performance
- **Banco de Dados**: PostgreSQL com extensão pgvector
- **ORM**: Drizzle ORM com migrações de schema
- **Validação**: Zod para validação de schemas
- **Qualidade de Código**: Biome + Ultracite para linting e formatação
- **Containerização**: Docker Compose para desenvolvimento local

#### **Frontend (Web)**
- **Framework**: React 19.1.0
- **Ferramenta de Build**: Vite 7.0.4
- **Linguagem**: TypeScript 5.8.3
- **Estilização**: Tailwind CSS 4.1.11
- **Roteamento**: React Router DOM 7.6.3
- **Gerenciamento de Estado**: TanStack React Query 5.83.0
- **Componentes UI**: Primitivos Radix UI
- **Ícones**: Lucide React

### 🛠️ Começando

#### **Pré-requisitos**
- Node.js (v18 ou superior)
- npm, yarn, ou pnpm
- Docker e Docker Compose

#### **1. Clone o repositório**
```bash
git clone <repository-url>
cd nlw-agents
```

#### **2. Configuração do Backend**
```bash
cd back

# Instalar dependências
npm install

# Criar arquivo de ambiente
# Crie um arquivo .env com:
# PORT=3333
# DATABASE_URL=postgresql://postgres:postgres@localhost:5432/agents

# Iniciar o banco de dados
docker-compose up -d

# Executar migrações do banco
npx drizzle-kit migrate

# Fazer seed do banco de dados (opcional)
npm run db:seed

# Iniciar o servidor de desenvolvimento
npm run dev
```

A API estará disponível em `http://localhost:3333`

#### **3. Configuração do Frontend**
```bash
cd web

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação web estará disponível em `http://localhost:5173`

### 📊 Scripts Disponíveis

#### **Backend**
- `npm run dev` - Inicia servidor de desenvolvimento com modo watch
- `npm start` - Inicia servidor de produção
- `npm run db:seed` - Executa seed do banco de dados
- `npx drizzle-kit generate` - Gera novas migrações
- `npx drizzle-kit migrate` - Executa migrações pendentes
- `npx drizzle-kit studio` - Abre o Drizzle Studio (GUI do banco de dados)

#### **Frontend**
- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Visualiza build de produção

### 🔗 Endpoints da API

- `GET /health` - Endpoint de verificação de saúde
- `GET /rooms` - Lista todas as salas
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:id/questions` - Obtém perguntas da sala
- `POST /rooms/:id/questions` - Cria uma pergunta na sala

### 🏗️ Arquitetura & Padrões

#### **Backend**
- Design de API RESTful
- Desenvolvimento type-safe com TypeScript
- Abordagem schema-first com validação Zod
- Migrações de banco de dados com Drizzle Kit
- Validação de ambiente para configuração
- Configuração CORS para requisições cross-origin
- Estrutura de roteamento modular

#### **Frontend**
- Composição de componentes usando primitivos Radix UI
- CSS utility-first com Tailwind CSS
- Type safety com configuração TypeScript abrangente
- Roteamento client-side com React Router
- Gerenciamento de estado do servidor com TanStack React Query
- Design responsivo com abordagem mobile-first
- Componentes compatíveis com WCAG seguindo regras de acessibilidade

---

## 📄 License

This project was developed during Rocketseat's NLW event for educational purposes.

*Este projeto foi desenvolvido durante o evento NLW da Rocketseat para fins educacionais.*

## 🎯 About Rocketseat

[Rocketseat](https://rocketseat.com.br/) is a Brazilian tech education platform that offers programming courses and hosts development events like NLW (Next Level Week).

*[Rocketseat](https://rocketseat.com.br/) é uma plataforma brasileira de educação em tecnologia que oferece cursos de programação e organiza eventos de desenvolvimento como o NLW (Next Level Week).*
