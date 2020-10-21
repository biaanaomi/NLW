//arquivo inicial da aplicação
// yarn dev para rodar 
import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use ('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros 

// GET = Buscar uma informação (List, item)
// POST = Criando uma info
// PUT = Editando uma info
// DELETE = Deletar uma info

// Query: http://localhost:3333/users?search=bia&page2
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/1 (Corpo da requisção -> formulario)

app.listen(3333); //ouvindo essa porta

// requisicao e resposta, express é framework ajuda a conf rotas
// localhost:333
// node src/server.ts
// node não suporta typescript, só entende javascript
// logo precisa instalar typescript e yarn tsc --init

// NIVEIS DE ABSTRAÇÃO dentro do NODE

// Driver nativo: permite executar as query direto pelo node, mas sem nehum nivel de abstração. Escrever query como se tivesse no banco de dados
// Query Builder: Query com javascript, pois converte a sintaxe
// ORM: nivel de abstração maior possível (Object Relational Mapping). Para tabela tem-se uma classe, cada linha de retorna é uma instancia da classe
    // 3 users 
    // User User User -> 3 instancias, objetos da classes User
// Os dois ultimo consigo trocar banco de dados

//CONTROLAR BANCO DE DADOS com varios usuario -> migations
