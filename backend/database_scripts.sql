
create database proyecto_s1;


create table if not exists users (
    id serial primary key,
    email text unique,
    points int,
    name varchar,
    password varchar(20)
);

create table if not exists tema (
    id serial primary key,
    subject varchar,
    grade varchar,
    title varchar,
    body text,
    video_url text
);

create table if not exists ejercicio (
    id serial primary key,
    id_tema int,
    foreign key(id_tema) references tema(id)
);

