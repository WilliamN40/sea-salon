# Sea Salon Project

Welcome to the Sea Salon Project! This project is built with Next.js, Prisma, and PostgreSQL. You can access the live version of this project at [Sea Salon](https://sea-salon-nine.vercel.app/).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Database](#database)
- [Technologies Used](#technologies-used)

### Features
- Time slot reservation system
- Customer Review System
- Authentication System
    - Admin Dashboard
        - Access via login ```thomas.n@ntu.edu.sg``` and password ```Admin123```
        - Add services, add new branch

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/sea-salon.git
cd sea-salon
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Set up the database:

Make sure you have PostgreSQL installed and running. Create a new database for the project.

4. Configure environment variables:
Create a .env file in the root of the project and add the following variables:

```POSTGRES_URL="your_postgres_url"
POSTGRES_PRISMA_URL="your_postgres_prisma_url"
POSTGRES_URL_NO_SSL="your_postgres_url_no_ssl"
POSTGRES_URL_NON_POOLING="your_postgres_url_non_pooling"
POSTGRES_USER="default"
POSTGRES_HOST="your_postgres_host"
POSTGRES_PASSWORD="your_postgres_password"
POSTGRES_DATABASE="verceldb"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"
```
Replace your _postgres_* and your _nextauth_* with your actual PostgreSQL and NextAuth credentials.

### Running the Project
1. Generate Prisma client:
```bash
npx prisma generate
```

2. Run database migrations:
```bash
npx prisma migrate dev --name init
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```
The project should now be running at http://localhost:3000.

### Database
This project uses Prisma as the ORM and PostgreSQL as the database.

#### Prisma Schema
The Prisma schema is defined in prisma/schema.prisma. You can update the schema and run migrations as needed.

#### Running Migrations
To create a new migration, run:

```bash
npx prisma migrate dev --name migration-name
```

### Technologies Used
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.prisma.io/)
- [React](https://reactjs.org/)
- [NextAuth.js](https://next-auth.js.org/)