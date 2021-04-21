
create database proyecto_s1;


create table if not exists users (
    id serial primary key,
    email text unique,
    name varchar,
    password varchar(20)
);

