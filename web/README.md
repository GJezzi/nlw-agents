# NLW Agents

*[English](#english) | [Português](#português)*

---

## English

### 📝 About

**NLW Agents** is a web application developed during a Rocketseat event as part of the Next Level Week (NLW) program. This project demonstrates modern React development patterns and best practices for building scalable web applications.

### 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.3
- **State Management**: TanStack React Query 5.83.0
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Code Quality**: Biome 2.0.6 with Ultracite rules
- **Component Variants**: Class Variance Authority (CVA)

### 🏗️ Architecture & Patterns

#### **Project Structure**
```
src/
├── components/          # Reusable UI components
│   └── ui/             # Base UI components (shadcn/ui style)
├── lib/                # Utility functions and configurations
├── pages/              # Page components (route handlers)
├── assets/             # Static assets
└── main.tsx           # Application entry point
```

#### **Design Patterns**
- **Component Composition**: Using Radix UI primitives for accessible components
- **Utility-First CSS**: Tailwind CSS for styling with custom utility functions
- **Type Safety**: Full TypeScript implementation with strict null checks
- **Code Quality**: Biome linting with Ultracite accessibility rules
- **Path Aliases**: Clean imports using `@/` prefix

#### **Key Features**
- **Room-based Application**: Create and join rooms functionality
- **Client-side Routing**: Dynamic routing with React Router
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG compliant components following Ultracite rules
- **Type-safe Development**: Comprehensive TypeScript configuration

### 🛠️ Setup & Development

#### **Prerequisites**
- Node.js (v18 or higher)
- npm, yarn, or pnpm

#### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd nlw-agents/web

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

#### **Development**
```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

#### **Build**
```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build
```

#### **Preview**
```bash
# Preview production build
npm run preview
# or
yarn preview
# or
pnpm preview
```

### 📦 Key Dependencies

- **@tanstack/react-query**: Server state management
- **@radix-ui/react-slot**: Primitive component composition
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind class merging utility
- **lucide-react**: Beautiful & consistent icon pack

### 🎯 Development Standards

- **Code Formatting**: Biome with semicolon preference disabled
- **Accessibility**: Comprehensive ARIA and semantic HTML rules via Ultracite
- **TypeScript**: Strict null checks and path mapping enabled
- **Component Architecture**: shadcn/ui compatible component structure

---

## Português

### 📝 Sobre

**NLW Agents** é uma aplicação web desenvolvida durante um evento da Rocketseat como parte do programa Next Level Week (NLW). Este projeto demonstra padrões modernos de desenvolvimento React e melhores práticas para construir aplicações web escaláveis.

### 🚀 Stack Tecnológica

- **Framework Frontend**: React 19.1.0
- **Ferramenta de Build**: Vite 7.0.4
- **Linguagem**: TypeScript 5.8.3
- **Estilização**: Tailwind CSS 4.1.11
- **Roteamento**: React Router DOM 7.6.3
- **Gerenciamento de Estado**: TanStack React Query 5.83.0
- **Componentes UI**: Primitivos Radix UI
- **Ícones**: Lucide React
- **Qualidade de Código**: Biome 2.0.6 com regras Ultracite
- **Variantes de Componentes**: Class Variance Authority (CVA)

### 🏗️ Arquitetura & Padrões

#### **Estrutura do Projeto**
```
src/
├── components/          # Componentes UI reutilizáveis
│   └── ui/             # Componentes base (estilo shadcn/ui)
├── lib/                # Funções utilitárias e configurações
├── pages/              # Componentes de página (manipuladores de rota)
├── assets/             # Arquivos estáticos
└── main.tsx           # Ponto de entrada da aplicação
```

#### **Padrões de Design**
- **Composição de Componentes**: Usando primitivos Radix UI para componentes acessíveis
- **CSS Utility-First**: Tailwind CSS para estilização com funções utilitárias customizadas
- **Type Safety**: Implementação completa em TypeScript com verificações de null estritas
- **Qualidade de Código**: Linting Biome com regras de acessibilidade Ultracite
- **Alias de Caminhos**: Imports limpos usando prefixo `@/`

#### **Funcionalidades Principais**
- **Aplicação Baseada em Salas**: Funcionalidade de criar e entrar em salas
- **Roteamento Client-side**: Roteamento dinâmico com React Router
- **Design Responsivo**: Abordagem mobile-first com Tailwind CSS
- **Acessibilidade**: Componentes compatíveis com WCAG seguindo regras Ultracite
- **Desenvolvimento Type-safe**: Configuração TypeScript abrangente

### 🛠️ Configuração & Desenvolvimento

#### **Pré-requisitos**
- Node.js (v18 ou superior)
- npm, yarn, ou pnpm

#### **Instalação**
```bash
# Clonar o repositório
git clone <repository-url>
cd nlw-agents/web

# Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install
```

#### **Desenvolvimento**
```bash
# Iniciar servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

#### **Build**
```bash
# Build para produção
npm run build
# ou
yarn build
# ou
pnpm build
```

#### **Preview**
```bash
# Visualizar build de produção
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

### 📦 Dependências Principais

- **@tanstack/react-query**: Gerenciamento de estado do servidor
- **@radix-ui/react-slot**: Composição de componentes primitivos
- **class-variance-authority**: Gerenciamento de variantes de componentes
- **clsx**: Utilitário para className condicional
- **tailwind-merge**: Utilitário para mesclagem de classes Tailwind
- **lucide-react**: Pacote de ícones belos e consistentes

### 🎯 Padrões de Desenvolvimento

- **Formatação de Código**: Biome com preferência de ponto e vírgula desabilitada
- **Acessibilidade**: Regras abrangentes de ARIA e HTML semântico via Ultracite
- **TypeScript**: Verificações de null estritas e mapeamento de caminhos habilitado
- **Arquitetura de Componentes**: Estrutura de componentes compatível com shadcn/ui

---

## 📄 License

This project was developed during Rocketseat's NLW event for educational purposes.

*Este projeto foi desenvolvido durante o evento NLW da Rocketseat para fins educacionais.*
