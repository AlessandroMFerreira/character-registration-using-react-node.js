create database movies;

use movies;

create table movie_character(
	id int primary key auto_increment,
    nome varchar(250),
    descricao_curta varchar(500),
    descricao_completa varchar(1024),
    url_imagem varchar(500)
);

create table sys_user(
	id int primary key auto_increment,
    nome varchar(500) not null,
    usuario varchar(250) not null,
    senha varchar(500) not null,
    tipo char(3) not null
);


