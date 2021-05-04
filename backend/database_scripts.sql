
create database proyecto_s1;


create table if not exists users (
    id serial primary key,
    email text unique,
    name varchar,
    password varchar(20)
);


create table if not exists grado (
    id serial primary key,
    image text,
    name varchar
);


create table if not exists materia (
    id serial primary key,
    id_grado int,
    image text,
    name varchar,
    description text,
    foreign key(id_grado) references grado(id)
);


create table if not exists tema (
    id serial primary key,
    id_materia int,
    title varchar,
    body text,
    video_url text,
    foreign key(id_materia) references materia(id)
);

create table if not exists ejercicio (
    id serial primary key,
    id_tema int,
    foreign key(id_tema) references tema(id)
);

