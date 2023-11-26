import express from "express"
import {pool} from "./db.js"

const app = express()

app.use(express.json());

app.get('/cliente',async(req,res)=>{
    const [resultado] = await pool.query('select * from cliente');
    res.send(resultado);
})

app.listen(3000)
console.log("Servidor esuchando en el puerto 3000")