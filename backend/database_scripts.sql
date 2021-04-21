
create database proyectoS1;


create table if not exists users (
    id serial primary key,
    email text,
    name varchar,
    password varchar(20)
);

