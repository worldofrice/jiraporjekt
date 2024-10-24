
# Jiraporjekt (Tarkvaraarenduse meetodid)

Esimene projekt tarkvaraarenduse meetodite tunnis.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```env
PORT=3333
HOST=localhost
NODE_ENV=development
APP_KEY=sH2k88gojcp3PdAJiGDxof54kjtTXa3g
SESSION_DRIVER=cookie
CACHE_VIEWS=false
LOG_LEVEL=debug
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=mysql
DB_DATABASE=jiraporjekt
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/worldofrice/jiraporjekt
```

Go to the project directory

```bash
  cd jiraporjekt
```

Install dependencies

```bash
  npm install
```

Run database migration

```bash
  node ace migration:run
```

(Optional) Seed database

```bash
  node ace db:seed
```

Start the server

```bash
  npm run dev
```
