-- INSERTAR DATOS DE PRUEBA

INSERT INTO cliente (rut, nombre_cliente, apellido_paterno, apellido_materno, correo, n_telefono) 
VALUES
  (12345678, 'Juan', 'Pérez', 'Gómez', 'juan@gmail.com', 987654321),
  (23456789, 'María', 'López', 'Martínez', 'maria@gmail.com', 876543210),
  (34567890, 'Pedro', 'Gómez', 'López', 'pedro@gmail.com', 765432529),
  (20749196, 'Miguel', 'Alvarez', 'Araneda', 'miguel@gmail.com', 765432109),
  (21793482, 'Jose', 'Enriquez', 'López', 'jose@gmail.com', 156773234),
  (21340274, 'Ana', 'Rodríguez', 'Hernández', 'ana@gmail.com', 123456789),
  (87654321, 'Carlos', 'Sánchez', 'Martín', 'carlos@gmail.com', 234567890),
  (76543210, 'Luisa', 'García', 'Díaz', 'luisa@gmail.com', 345678901),
  (12345628, 'Alexis', 'Sanchez', 'Gómez', 'alexis@gmail.com', 982354321),
  (12345621, 'Sebas', 'Gonzalez', 'Gómez', 'Seba@gmail.com', 982354621);
  
INSERT INTO estado_reserva (id_estado_reserva, descripcion_estado)
VALUES
	(0,'Cancelada'),
    (1,'Activa'),
    (2,'Pendiente');

INSERT INTO vuelo (id_vuelo, hora_partida, hora_llegada, ciudad_origen, ciudad_destino, aeropuerto_origen, aeropuerto_destino, pais_origen, pais_destino) 
VALUES
(1, '2023-12-01 08:00:00', '2023-12-01 10:30:00', 'Santiago', 'Buenos Aires', 'Arturo Merino Benítez', 'Ministro Pistarini', 'Chile', 'Argentina'),
(2, '2023-12-02 15:00:00', '2023-12-02 18:00:00', 'Lima', 'Bogotá', 'Jorge Chávez', 'El Dorado', 'Perú', 'Colombia'),
(3, '2023-12-03 09:00:00', '2023-12-03 12:00:00', 'Caracas', 'Quito', 'Simón Bolívar', 'Mariscal Sucre', 'Venezuela', 'Ecuador'),
(4, '2023-12-04 11:00:00', '2023-12-04 14:00:00', 'La Paz', 'Asunción', 'El Alto', 'Silvio Pettirossi', 'Bolivia', 'Paraguay'),
(5, '2023-12-05 13:00:00', '2023-12-05 16:00:00', 'Montevideo', 'Brasilia', 'Carrasco', 'Presidente Juscelino Kubitschek', 'Uruguay', 'Brasil'),
(6, '2023-12-06 10:00:00', '2023-12-06 13:30:00', 'San José', 'Ciudad de México', 'Juan Santamaría', 'Benito Juárez', 'Costa Rica', 'México'),
(7, '2023-12-07 14:00:00', '2023-12-07 17:00:00', 'Panamá', 'La Habana', 'Tocumen', 'José Martí', 'Panamá', 'Cuba'),
(8, '2023-12-08 12:00:00', '2023-12-08 15:30:00', 'San Salvador', 'San Juan', 'Monseñor Óscar Arnulfo Romero', 'Luis Muñoz Marín', 'El Salvador', 'Puerto Rico'),
(9, '2023-12-09 16:00:00', '2023-12-09 19:00:00', 'Guatemala', 'Managua', 'La Aurora', 'Augusto C. Sandino', 'Guatemala', 'Nicaragua'),
(10, '2023-12-10 07:00:00', '2023-12-10 10:00:00', 'Kingston', 'Santo Domingo', 'Norman Manley', 'Las Américas', 'Jamaica', 'República Dominicana');

INSERT INTO reserva (id_reserva, id_estado_reserva, rut, id_vuelo)
VALUES 
(0, 1, 12345678, 1),
(1, 1, 23456789, 2),
(2, 1, 34567890, 3);