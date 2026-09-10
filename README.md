# ConnectFlow Frontend

Frontend da aplicação **ConnectFlow**, desenvolvido com **Angular** para gerenciamento de empresas e integração com o backend da aplicação.

## 🚀 Sobre o projeto

O ConnectFlow é uma aplicação web desenvolvida com foco no gerenciamento de empresas.

Este repositório contém a camada de **frontend**, responsável pela interface da aplicação e pela comunicação com a API REST disponibilizada pelo backend.

O projeto faz parte de uma aplicação full stack, composta por:

- Frontend: Angular
- Backend: Java + Spring Boot
- Banco de dados: PostgreSQL

## 🛠️ Tecnologias utilizadas

- Angular
- TypeScript
- HTML
- CSS
- Angular CLI
- Node.js
- npm
- REST API

## 📋 Funcionalidades

O frontend foi estruturado para consumir os serviços disponibilizados pelo backend e fornecer uma interface para as operações de gerenciamento de empresas.

Entre as operações previstas na aplicação estão:

- Cadastro de empresas
- Consulta de empresas
- Atualização de empresas
- Integração com API REST
- Comunicação entre frontend e backend

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

Node.js
npm
Angular CLI

Para verificar as versões instaladas:

node --version
npm --version
ng version

## ▶️ Executando o projeto

Clone o repositório:

git clone https://github.com/reblreis/connectflow-frontend.git

Entre na pasta do projeto:

cd connectflow-frontend

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

ng serve

A aplicação estará disponível em:

http://localhost:4200/

## 🔗 Integração com o Backend

O frontend utiliza uma API REST para comunicação com o backend do ConnectFlow.

Durante o desenvolvimento local, o arquivo proxy.conf.json pode ser utilizado para configurar o encaminhamento das requisições entre Angular e o backend.

Backend do projeto:

ConnectFlow Backend

https://github.com/reblreis/connectflow-backend

## 🧪 Build

Para gerar uma versão de produção:

ng build

Os arquivos gerados serão disponibilizados no diretório de build configurado pelo Angular.

## 👩‍💻 Autora

### Regina Reis
Desenvolvedora Java Full Stack e Desenvolvedora/Funcional Salesforce.

## 📁 Estrutura do projeto

```text
connectflow-frontend/
├── public/
├── src/
│   ├── app/
│   └── ...
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── proxy.conf.json
├── tsconfig.json
└── README.md
