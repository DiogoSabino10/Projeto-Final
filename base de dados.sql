-- Cria um banco de dados chamado "coruja_house"
CREATE DATABASE coruja_house;

-- Use o banco de dados "coruja_house"
USE coruja_house;

-- Crie uma tabela para armazenar informações de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    data_selecionada DATE NOT NULL
);
