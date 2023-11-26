import express from "express"
import {pool} from "./db.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json());

app.set(express.static('nueva carpeta'))

app.get('/', function(req,res){
    res.send('aplicacion inicada todo va bien')
})

app.get('/cliente',async(req,res)=>{
    const [resultado] = await pool.query('select * from cliente');
    res.send(resultado);
})

app.get('/vuelo',async(req,res)=>{
    const [resultado] = await pool.query('select * from vuelo');
    res.send(resultado);
})

// REGISTRAR CLIENTE

app.get('/agregar', async(req,res)=>{
    const {rut} = req.body;
    const [resultado] = await pool.query('select * from cliente where rut = (?) and nombre_cliente = (?) and apellido_paterno = (?) and apellido_materno = (?) and correo = (?) and n_telefono = (?)',[rut,nombre,app,apm,correo,telefono]);
    res.send(resultado);
})

app.listen('3000',function(){
    console.log("Servidor esuchando en el puerto 3000");
})