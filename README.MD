# CRUD Projeto

Este é um projeto simples de CRUD (Create, Read, Update, Delete) para gerenciar itens. Ele inclui um front-end básico em HTML/JavaScript e um back-end em Node.js com Express, armazenando dados em memória.

## Descrição

O projeto permite criar, listar, atualizar e deletar itens via uma interface web. O back-end fornece uma API REST, e o front-end interage com ela usando fetch.

## Funcionalidades

- **Criar Item**: Adicione um novo item com nome.
- **Listar Itens**: Visualize todos os itens em uma lista.
- **Atualizar Item**: Edite o nome de um item existente.
- **Deletar Item**: Remova um item da lista.
- Dados armazenados em memória (reiniciados ao parar o servidor).

## Tecnologias Utilizadas

- **Back-end**: Node.js, Express
- **Front-end**: HTML, CSS, JavaScript (vanilla)
- **Outros**: Nenhum banco de dados (dados em array)

## Instalação

1. Certifique-se de ter o Node.js instalado (versão 14+).
2. Clone O Projeto `git clone https://github.com/AntonyMiguelbzl/ProjetoCrud.git`.
3. Instale as dependências: `npm install`.

## Como Usar

1. Inicie o back-end: `node server.js`.
2. Abra `index.html` no navegador (ou use um servidor local: `python -m http.server` na pasta do projeto).
3. Use a interface para gerenciar itens.

## Endpoints da API

- **GET /api/items**: Lista todos os itens.
- **POST /api/items**: Cria um novo item. Corpo: `{ "name": "Nome do Item" }`.
- **PUT /api/items/:id**: Atualiza um item. Corpo: `{ "name": "Novo Nome" }`.
- **DELETE /api/items/:id**: Deleta um item.

Exemplo de uso com curl:
```
curl -X GET http://localhost:5000/api/items
curl -X POST http://localhost:5000/api/items -H "Content-Type: application/json" -d '{"name":"Exemplo"}'
```

## Estrutura do Projeto

- `server.js`: Código do back-end.
- `index.html`: Página principal do front-end.
- `script.js`: Lógica JavaScript do front-end.
- `README.MD`: Este arquivo.

## Contribuição

Sinta-se à vontade para contribuir. Faça um fork, crie uma branch e envie um pull request.

## Licença

Este projeto é de uso livre. Sem licença específica.
