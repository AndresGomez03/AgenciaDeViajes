create database agenciaviajes;

-- Recordar mantener el esquema de la bd como default

-- CREAR TABLAS
CREATE TABLE cliente (
<<<<<<< HEAD
    rut INT AUTO_INCREMENT PRIMARY KEY,
=======
    rut INT UNSIGNED NOT NULL PRIMARY KEY,
>>>>>>> b382e6907e3f8729d2e54851741bae3a9d404453
    nombre_cliente VARCHAR(50),
    Apellido_paterno VARCHAR(30),
    Apellido_materno VARCHAR(30),
    correo VARCHAR(50),
    n_telefono INT
);

CREATE TABLE vuelo (
    id_vuelo INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hora_partida DATETIME,
    hora_llegada DATETIME,
    ciudad_origen VARCHAR(50),
    ciudad_destino VARCHAR(50),
    aeropuerto_origen VARCHAR(100),
    aeropuerto_destino VARCHAR(100),
    pais_origen VARCHAR(50),
    pais_destino VARCHAR(50)
);

CREATE TABLE reserva (
    id_reserva INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,	
    id_estado_reserva INT NOT NULL,
    rut	INT NOT NULL,
    id_vuelo INT NOT NULL
);

CREATE TABLE estado_reserva (
    id_estado_reserva INT UNSIGNED NOT NULL PRIMARY KEY,
    descripcion_estado VARCHAR(50)
);