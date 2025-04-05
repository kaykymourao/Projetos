Instruções para Execução do Projeto

1 - Configurações e Execução do Backend

Rodar o Maven e o MySQL
No MySQL, criar uma conexão nova, e rodar os comandos do arquivo Query
Abrir a pasta do projeto no VSCode
Abrir o terminal na pasta demo (o caminho é muralis/backend/demo) e executar o comando "mvn spring-boot:run"

2 - Configurações e Execução do Frontend

Abrir o terminal na pasta muralis e executar o comando npm install para instalar as dependências
Abrir o terminal na pasta muralis e executar o comando npm run dev para poder abrir a página

- Estrutura do Projeto

Este projeto consiste em um sistema para gerenciamento de clientes e contatos, foi desenvolvido com React.js, Spring Boot e MySQL

Na pasta backend, há todos os arquivos relacionados ao backend e na de frontend, há os arquivos jsx, css e etc.

- Principais Dependências

Backend
    - Spring Boot
    - MySQL Driver
    - Hibernate

Frontend
    - React.js
    - React Router
    - Fetch API

Instruições de Uso:

Gerenciar Cliente:
    - Adicionar um novo cliente
    - Editar informações de um cliente
    - Excluir um cliente e seus contatos associados

Gerenciar Contatos:
    - Adicionar contatos para um cliente específico 
    - Editar contatos existentes
    - Excluir contatos de um cliente específico

