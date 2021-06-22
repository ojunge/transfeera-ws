# transfeera-ws

## Instruções

Para rodar o projeto siga o comando abaixo:

```bash
cd transfeera-ws/
node src\index.js
```

para executar os tests

```bash
cd transfeera-ws/
npm run test
```

Banco de dados utilizado foi o postgres.


# db:create

```bash
npx sequelize-cli db:create
```

# db create migration

```bash
npx sequelize-cli migration:generate --name demo-user
```

# db:migrate

```bash
npx sequelize-cli db:migrate
```

# create seed

```bash
npx sequelize-cli seed:generate --name create-projects
```

# run seed

```bash
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo
```
