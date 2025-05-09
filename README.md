Deploy do projeto: https://futureme-tawny.vercel.app/

🧰 Tecnologias e Bibliotecas
- Next.js – Framework React para SSR e SSG.
- Prisma – ORM para banco de dados.
- Chakra UI – Biblioteca de componentes acessíveis e estilizados.
- React Hook Form – Manipulação de formulários.
- Zod + @hookform/resolvers – Validação de formulários.
- React Icons – Biblioteca de ícones.
- Sonner – Notificações toast modernas e acessíveis.

## 🚀 Como executar a aplicação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/gabifrancamr/futureme.git
   cd futureme
   ```
2. **Instalar dependências**
  ```bash
  npm install
  ```
3.**Arquivo .env**

Na raiz do projeto criar arquivo .env

observação: usuário e senha de exemplo. Use usuário e senha do banco de dados

   ```bash
   POSTGRES_DATABASE=futureme-bd
   POSTGRES_USER=nome_do_usuario
   POSTGRES_PASSWORD=senha_do_usuario

    POSTGRES_PRISMA_URL="postgresql://nome_do_usuario:senha_do_usuario@localhost:5432/futureme-bd?schema=public"
    POSTGRES_URL_NON_POOLING="postgresql://nome_do_usuario:senha_do_usuario@localhost:5432/futureme-bd?schema=public"
   ```
4. **Execute comando docker**
   ```bash
   docker compose up -d
   ```
5. **Execute as migrações Prisma**
   ```bash
   npx prisma migrate dev
   ```
6.**Realizar conexão com banco de dados**
   ```bash
   Utilizei Banco de Dados DBeaver com PostgreSQL. Nome do banco, usuário e senha do arquivo .env
   ```
7. **Inicie a aplicação**
   ```bash
   npm run dev
   Acesse em: http://localhost:3000
   ```
   
 

