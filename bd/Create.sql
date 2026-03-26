create database if not exists restaurante_manager;
use restaurante_manager;

create table users (
	id int auto_increment primary key,
	nombre varchar(100),
	email varchar(100) unique,
	password varchar(255),
	role enum('admin', 'mesero', 'cocinero')
);

create table productos (
	id int auto_increment primary key,
	nombre varchar(100),
	descripcion text,
	precio decimal(10,2),
	stock int,
	categoria varchar(50)
);

create table pedidos (
	id int auto_increment primary key,
	user_id int,
	estados enum('pendiente', 'en_cocina', 'listo', 'entregado') DEFAULT 'pendiente',
	total decimal(10,2),
	fecha datetime default current_timestamp,
	foreign key (user_id) references users(id)
);

create table pedido_detalle (
	id int auto_increment primary key,
	pedido_id int,
	producto_id int,
	cantidad int,
	foreign key (pedido_id) references pedidos(id),
	foreign key (producto_id) references productos(id)
);
