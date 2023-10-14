# ABC++_API

Este é um Web-Service construído utilizando as seguintes tecnologias TypeScript, NodeJS, Express, Postgres para o Hackathon DESAFIO SERPRO.

Tem toda a estrutura das rotas prontas em uma colletion do thunderClient para testes.

Pode ser utilizado um Banco local para testes configurado um arquivo .env seguindo o padrão:

```bash
DATABASE_URL=# endereço do banco local 
JWT_SECRET=493852786270b68e182d6eb939b1f802 # chave em hash para validação via JWT
PORT=5000
```

Ou utilizando o nosso link do deploy que já contém banco em nuvem.

```bash
Link do Deploy: https://abc-api.onrender.com
```

## Quick start

Clone o repositório e siga a lista de comandos para instalar as dependências, preparar o banco de dados e rodar a aplicação de forma local.

```bash
git clone https://github.com/422UR4H/ABC_API.git
cd ABC_API
npm install
npm run dev:migration
npm run dev:seed
npm run dev
```
# Autores

## Aiton Correia Araujo - https://github.com/Ailton-Araujo

## Gabriela Montanhini de Oliveira - https://github.com/Gabrielamontanhini

## Leonardo Cas - UX/UI Designer

## Luís Arthur Cruz Sousa  - https://github.com/m4arthu

## Tiago Sindra Sad - https://github.com/422UR4H
