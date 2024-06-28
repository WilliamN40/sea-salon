# Sea Salon Project

Welcome to the Sea Salon Project! This project is built with Next.js, Prisma, and PostgreSQL. You can access the live version of this project at [Sea Salon](https://sea-salon-nine.vercel.app/).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14 or higher)
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

### Environment Variables
- POSTGRES_URL: The connection string for your PostgreSQL database.
- POSTGRES_PRISMA_URL: The Prisma connection string for your PostgreSQL database.
- POSTGRES_URL_NO_SSL: The connection string for your PostgreSQL database without SSL.
- POSTGRES_URL_NON_POOLING: The non-pooling connection string for your PostgreSQL database.
- POSTGRES_USER: The PostgreSQL user (default: "default").
- POSTGRES_HOST: The PostgreSQL host.
- POSTGRES_PASSWORD: The PostgreSQL password.
- POSTGRES_DATABASE: The PostgreSQL database (default: "verceldb").
- NEXTAUTH_URL: The URL of your NextAuth instance.
- NEXTAUTH_SECRET: The secret for NextAuth.

### Database
This project uses Prisma as the ORM and PostgreSQL as the database. Prisma makes it easy to interact with your database and provides type safety.

#### Prisma Schema
The Prisma schema is defined in prisma/schema.prisma. You can update the schema and run migrations as needed.

#### Running Migrations
To create a new migration, run:

```bash
npx prisma migrate dev --name migration-name
```

### File Structure
```
.
├── prisma
│   ├── migrations
│   └── schema.prisma
├── public
├── src
│   ├── pages
│   ├── components
│   ├── styles
│   └── lib
├── .env
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```
- prisma/: Contains the Prisma schema and migrations.
- public/: Static assets.
- src/: Source code.
    - pages/: Next.js pages.
    - components/: React components.
    - styles/: CSS styles.
    - lib/: Utility functions and libraries.
- .env: Environment variables.
- .gitignore: Git ignore file.
- package.json: Project dependencies and scripts.
- tsconfig.json: TypeScript configuration.
### Technologies Used
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.prisma.io/)
- [React](https://reactjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
### Contributing
Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is licensed under the MIT License - see the LICENSE file for details.