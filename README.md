#
CrudCD
-------------------------------

##
Este projeto é um Crud de Clientes, Produtos e Vendas.

###
Dependências:
-------------------------------
   - NodeJs v16
   - Docker v20
   - Docker-compose v1.29

###
Tecnologias:
-------------------------------
  - backend:
    - Typescript
    - SequelizeORM
    - MySql
    - Mocha, Chai, Sinon

  - frontend:
    - React
    - Javascript
    - HTML
    - CSS(WIP)

####
Execução:
-------------------------------
  Após instalação das dependências, na pasta raiz do projeto rodar ```npm start```.
  
  Para verificar a execução do frontend: ```http://localhost:3000```.
  
  Para parar a execução dos containers: ```npm run compose:down```, na pasta raiz do projeto.

####
Seeders:
-------------------------------
  
  <img src="./imgs/Clientes.png">
  <img src="./imgs/Produtos.png">
  <img src="./imgs/Vendas.png">


####
Explicação do projeto:
-------------------------------
Este projeto é um CRUD de Clientes, Produtos e Vendas. Ele possui 3 imagens Docker, uma para o database, uma para o frontend e a outra para o backend. Algumas melhorias ainda podem ser feitas, mas em respeito à data de entrega do projeto, irei deixar as atualizações em uma PR, caso tenham interesse. Abaixo segue um link do Loom, com uma breve demonstração da aplicação.
