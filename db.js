import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'gerardoDBA',
    password: '0451',
    port: 3306,
    database: 'agenciaviajes'
})

