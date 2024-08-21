import mongoose from 'mongoose';

const endereco = 'mongodb+srv://admin:admin@clusteraula8.pl9e9.mongodb.net/';
const configuracao = {};

async function conectar() {
  try {
    await mongoose.connect(endereco);
    console.log('CONECTADO COM O BANCO DE DADOS!');
  } catch (erro) {
    console.error('Erro ao conectar com o banco de dados:', erro.message);
  }
}

conectar();

mongoose.Promise = global.Promise;
