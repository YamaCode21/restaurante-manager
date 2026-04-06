use restaurante_manager;

-- 1. Insertar el Restaurante
INSERT INTO restaurantes (nombre, direccion, telefono) 
VALUES ('La Pescadería Central', 'Av. Marina 123, Callao', '987654321');

-- 2. Insertar Usuarios (asociados al restaurante ID 1)
INSERT INTO usuarios (nombre, email, password, rol, resturante_id) 
VALUES 
('Admin Jefe', 'admin@pescaderia.com', 'admin123', 'admin', 1),
('Carlos Mesero', 'carlos@pescaderia.com', 'mesero123', 'mesero', 1),
('Ana Chef', 'ana@pescaderia.com', 'cocina123', 'cocinero', 1);

-- 3. Insertar Categorías
INSERT INTO categorias (nombre, restaurante_id) 
VALUES 
('Entradas', 1),
('Platos de Fondo', 1),
('Bebidas', 1);

-- 4. Insertar Productos
INSERT INTO productos (nombre, precio, categoria_id, stock) 
VALUES 
('Ceviche Simple', 35.50, 1, 20),
('Causa Acevichada', 28.00, 1, 15),
('Arroz con Mariscos', 42.00, 2, 10),
('Lomo Saltado', 45.00, 2, 12),
('Chicha Morada 1L', 15.00, 3, 50),
('Inca Kola Personal', 6.50, 3, 100);

-- 5. Crear un Pedido de prueba (ID 1)
INSERT INTO pedidos (restaurante_id, usuario_id, estado, total) 
VALUES (1, 2, 'en_cocina', 95.50);

-- 6. Detalle del Pedido (Lo que pidió el cliente en el pedido ID 1)
-- 2 Ceviches (35.50 * 2 = 71.00) y 1 Chicha (15.00) + 1 Inca (6.50) = 92.50
INSERT INTO pedido_detalle (pedido_id, producto_id, cantidad, precio_unitario, subtotal) 
VALUES 
(1, 1, 2, 35.50, 71.00),
(1, 5, 1, 15.00, 15.00),
(1, 6, 1, 6.50, 6.50);
