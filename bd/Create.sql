DROP DATABASE IF EXISTS restaurante_manager;
create database if not exists restaurante_manager;
use restaurante_manager;

create table usuarios (
	id int auto_increment primary key,
	nombre varchar(100),
	email varchar(100) unique,
	password varchar(255),
	rol enum('admin', 'mesero', 'cocinero'),
	resturante_id int,
	activo boolean default true,
	creado_en timestamp default current_timestamp
);

create table restaurantes (
	id int auto_increment primary key,
	nombre varchar(150),
	direccion varchar(255),
	telefono varchar(20),
	creado_en timestamp default current_timestamp
);

create table categorias (
	id int auto_increment primary key,
	nombre varchar(100),
	restaurante_id int,
	activo boolean default true,
	foreign key (restaurante_id) references restaurantes(id)
);

create table productos (
	id int auto_increment primary key,
	nombre varchar(100),
	precio decimal(10,2),
	categoria_id int,
	stock int,
	activo boolean default true,
	creado_en timestamp default current_timestamp,
	foreign key (categoria_id) references categorias(id)
);

create table pedidos (
	id int auto_increment primary key,
	restaurante_id int,
	usuario_id int,
	estado enum('pendiente', 'en_cocina', 'listo', 'entregado') DEFAULT 'pendiente',
	total decimal(10,2),
	fecha datetime default current_timestamp,
	activo boolean default true,
	foreign key (restaurante_id) references restaurantes(id),
	foreign key (usuario_id) references usuarios(id)
);

create table pedido_detalle (
	id int auto_increment primary key,
	pedido_id int,
	producto_id int,
	cantidad int,
	precio_unitario decimal(10,2),
	subtotal decimal(10,2),
	foreign key (pedido_id) references pedidos(id),
	foreign key (producto_id) references productos(id)
);
