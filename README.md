# Seja bem vindo ao projeto Car Shop! 🚗 & 🏍

## Stack utilizada

**Back-end:**

- Typescript com Conceitos POO e SOLID;
- API com CRUD
- NodeJs;
- Express;
- Sequelize;
- Mocha, Chai e Sinon para testes de integração e Docker;
- MongoDB

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>

Para este projeto, eu pude aplicar os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD` (utilizando o método `TDD`), para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados `MongoDB`.
<br />

</details>

<details>
  <summary>
    <strong>🐳 Rodando no Docker vs Localmente</strong>
  </summary><br>

## Docker

> Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.

- Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
- Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
- A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

> Use o comando `docker exec -it car_shop bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências [**Caso existam**] com `npm install`

⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="images/remote-container.png" width="800px" >

## Localmente

> Instale as dependências [**Caso existam**] com `npm install`

✨ Para rodar o projeto, obrigatoriamente você deve ter o `node` instalado em seu computador.
✨ A versão do `node` utilizada precisa ser a 16.

</details>

<h1 style="center">Obrigado pela visita ao meu repositório</h1>

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vinidipaula.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinicius-depaula/)
