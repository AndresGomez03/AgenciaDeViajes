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

app.get('/agregar/:rut_ingresar/:nombre_ingresar/:app_ingresar/:apm_ingresar/correo_ingresar/:telefono_ingresar',function(req,res){
    let nombre = req.params.nombre_ingresar;
    let rut = req.params.rut_ingresar;
    console.log(nombre,rut);
})

app.listen('3000',function(){
    console.log("Servidor esuchando en el puerto 3000");
})