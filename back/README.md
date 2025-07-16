# NLW Agents

[🇧🇷 Versão em Português](#versão-em-português) | [🇺🇸 English Version](#english-version)

---

## English Version

### 📖 About

**NLW Agents** is a backend API project developed during a **Rocketseat** event. This project demonstrates modern Node.js development practices using TypeScript and a robust tech stack for building scalable APIs.

### 🚀 Tech Stack

- **Runtime**: Node.js with native TypeScript support
- **Framework**: [Fastify](https://fastify.dev/) - High-performance web framework
- **Database**: PostgreSQL with [pgvector](https://github.com/pgvector/pgvector) extension
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) with schema migrations
- **Validation**: [Zod](https://zod.dev/) for schema validation
- **Code Quality**: [Biome](https://biomejs.dev/) + [Ultracite](https://ultracite.dev/) for linting and formatting
- **Containerization**: Docker Compose for local development

### 🏗️ Architecture & Patterns

- **RESTful API** design
- **Type-safe** development with TypeScript
- **Schema-first** approach with Zod validation
- **Database migrations** with Drizzle Kit
- **Environment validation** for configuration
- **CORS** configuration for cross-origin requests
- **Modular routing** structure

### 📁 Project Structure

```
src/
├── env.ts                 # Environment validation
├── server.ts             # Main application entry point
├── db/
│   ├── connection.ts     # Database connection setup
│   ├── seed.ts          # Database seeding
│   ├── migrations/      # Auto-generated migrations
│   └── schema/          # Database schema definitions
└── http/
    └── routes/          # API route handlers
```

### 🛠️ Setup & Installation

#### Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- PostgreSQL (or use the provided Docker setup)

#### 1. Clone the repository

```bash
git clone <repository-url>
cd nlw/back
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Environment setup

Create a `.env` file in the project root:

```env
PORT=3333
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/agents
```

#### 4. Start the database

```bash
docker-compose up -d
```

#### 5. Run database migrations

```bash
npx drizzle-kit migrate
```

#### 6. Seed the database (optional)

```bash
npm run db:seed
```

#### 7. Start the development server

```bash
npm run dev
```

The API will be available at `http://localhost:3333`

### 📊 Available Scripts

- `npm run dev` - Start development server with watch mode
- `npm start` - Start production server
- `npm run db:seed` - Run database seeding
- `npx drizzle-kit generate` - Generate new migrations
- `npx drizzle-kit migrate` - Run pending migrations
- `npx drizzle-kit studio` - Open Drizzle Studio (database GUI)

### 🔗 API Endpoints

- `GET /health` - Health check endpoint
- `GET /rooms` - List all rooms

### 🐳 Docker Support

The project includes a Docker Compose setup with:
- PostgreSQL 17 with pgvector extension
- Automatic database initialization
- Persistent data volumes

### 🧪 Development Features

- **Hot reload** with Node.js watch mode
- **Native TypeScript** support (no compilation needed)
- **Type-safe** database queries with Drizzle ORM
- **Schema validation** with Zod
- **Code quality** enforcement with Biome + Ultracite

---

## Versão em Português

### 📖 Sobre

**NLW Agents** é um projeto de API backend desenvolvido durante um evento da **Rocketseat**. Este projeto demonstra práticas modernas de desenvolvimento Node.js usando TypeScript e uma stack tecnológica robusta para construir APIs escaláveis.

### 🚀 Stack Tecnológica

- **Runtime**: Node.js com suporte nativo ao TypeScript
- **Framework**: [Fastify](https://fastify.dev/) - Framework web de alta performance
- **Banco de Dados**: PostgreSQL com extensão [pgvector](https://github.com/pgvector/pgvector)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) com migrações de schema
- **Validação**: [Zod](https://zod.dev/) para validação de schemas
- **Qualidade de Código**: [Biome](https://biomejs.dev/) + [Ultracite](https://ultracite.dev/) para linting e formatação
- **Containerização**: Docker Compose para desenvolvimento local

### 🏗️ Arquitetura & Padrões

- Design de **API RESTful**
- Desenvolvimento **type-safe** com TypeScript
- Abordagem **schema-first** com validação Zod
- **Migrações de banco de dados** com Drizzle Kit
- **Validação de ambiente** para configuração
- Configuração de **CORS** para requisições cross-origin
- Estrutura de **roteamento modular**

### 📁 Estrutura do Projeto

```
src/
├── env.ts                 # Validação de ambiente
├── server.ts             # Ponto de entrada principal da aplicação
├── db/
│   ├── connection.ts     # Configuração de conexão com o banco
│   ├── seed.ts          # Seed do banco de dados
│   ├── migrations/      # Migrações auto-geradas
│   └── schema/          # Definições de schema do banco
└── http/
    └── routes/          # Manipuladores de rotas da API
```

### 🛠️ Configuração & Instalação

#### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (ou use a configuração Docker fornecida)

#### 1. Clone o repositório

```bash
git clone <repository-url>
cd nlw/back
```

#### 2. Instale as dependências

```bash
npm install
```

#### 3. Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/agents
```

#### 4. Inicie o banco de dados

```bash
docker-compose up -d
```

#### 5. Execute as migrações do banco

```bash
npx drizzle-kit migrate
```

#### 6. Faça o seed do banco de dados (opcional)

```bash
npm run db:seed
```

#### 7. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

### 📊 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento com modo watch
- `npm start` - Inicia servidor de produção
- `npm run db:seed` - Executa seed do banco de dados
- `npx drizzle-kit generate` - Gera novas migrações
- `npx drizzle-kit migrate` - Executa migrações pendentes
- `npx drizzle-kit studio` - Abre o Drizzle Studio (GUI do banco de dados)

### 🔗 Endpoints da API

- `GET /health` - Endpoint de verificação de saúde
- `GET /rooms` - Lista todas as salas

### 🐳 Suporte ao Docker

O projeto inclui uma configuração Docker Compose com:
- PostgreSQL 17 com extensão pgvector
- Inicialização automática do banco de dados
- Volumes de dados persistentes
Write a simple README.md for this project both in English and Portuguese containing all the tech information of the project, such as patterns, used libraries, setup. Don't ofrget to metion that the name of this project is NLW Agents and was developed during a Rocketseat event.Write a simple README.md for this project both in English and Portuguese containing all the tech information of the project, such as patterns, used libraries, setup. Don't ofrget to metion that the name of this project is NLW Agents and was developed during a Rocketseat event.
### 🧪 Funcionalidades de Desenvolvimento

- **Hot reload** com modo watch do Node.js
- Suporte **nativo ao TypeScript** (sem necessidade de compilação)
- Consultas de banco **type-safe** com Drizzle ORM
- **Validação de schema** com Zod
- **Qualidade de código** garantida com Biome + Ultracite

---

## 📄 License

This project was developed during a Rocketseat event for educational purposes.

---

## 🎯 About Rocketseat

[Rocketseat](https://rocketseat.com.br/) is a Brazilian tech education platform that offers programming courses and hosts development events like NLW (Next Level Week).
