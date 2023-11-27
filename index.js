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

app.post('/agregar', async(req,res)=>{
    const {rut,nombre_cliente,apellido_paterno,apellido_materno,correo,n_telefono} = req.body;
    const [resultado] = await pool.query('insert into cliente (rut, nombre_cliente, apellido_paterno, apellido_materno, correo, n_telefono) values (?,?,?,?,?,?)',[rut,nombre_cliente,apellido_paterno,apellido_materno,correo,n_telefono]);
    res.send(resultado);
})

// REALIZAR RESERVA

app.post('/reservar', async(req,res)=>{
    const {rut,id_vuelo} = req.body;
    const [resultado] = await pool.query('insert into reserva (rut, id_vuelo) values (?,?)',[rut,id_vuelo]);
    res.send(resultado);
})

// CONSULTAR RESERVA

app.get('/consultareserva/:rut/:idvuelo', async(req,res)=>{
    const [resultado] = await pool.query('select * from reserva where rut = (?) and id_vuelo = (?)',[req.params.rut , req.params.idvuelo]);
})

// MODIFICAR DATOS

app.get('')

app.post('/agregar/:rut/:nombre/:app/:apm/:correo/:telefono', async(req,res)=>{
    const [resultado] = await pool.query('insert into cliente (rut, nombre_cliente, apellido_paterno, apellido_materno, correo, n_telefono) values (?,?,?,?,?,?)',[req.params.rut,req.params.nombre,req.params.app,req.params.apm,req.params.correo,req.params.telefono]);
    res.send(resultado);
})

app.put('modificar/:rut/')

// CANCELAR RESERVA

app.delete('cancelar/:rut/:idvuelo', async(req,res)=>{
    const [resultado] = await pool.query('delete * from reserva where rut = (?) and id_vuelo = (?)',[req.params.rut , req.params.idvuelo]);
    res.send(resultado);
})

app.listen('3000',function(){
    console.log("Servidor esuchando en el puerto 3000");
})