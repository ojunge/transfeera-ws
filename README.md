# transfeera-ws

## instalando as dependências

NodeJs 14.17.1

```bash
cd transfeera-ws/
npm install
```
## instalando yarn globalmente na maquina

```bash
npm install --global yarn
```

## Instruções Banco de Dados 

Para rodar o projeto siga o comando abaixo:

```bash
cd transfeera-ws/
```
Banco de dados utilizado foi o postgres, alterar as configurações em config.json.

### db:create

```bash
npx sequelize-cli db:create
```
### db:migrate

```bash
npx sequelize-cli db:migrate
```
### run seed

```bash
npx sequelize-cli db:seed:all
```

## Instruções Testes 

para executar os tests

```bash
cd transfeera-ws/
npm run test
```

## Iniciando a aplicação.

```bash
cd transfeera-ws/
yarn start
```