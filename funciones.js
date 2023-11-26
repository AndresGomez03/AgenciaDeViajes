
//REGISTRAR CLIENTE

const rut_ingresar = document.querySelector("#rut_ingresar");
const nombre_ingresar = document.querySelector('#nom_ingresar');
const app_ingresar = document.querySelector('#app_ingresar');
const apm_ingresar = document.querySelector('#apm_ingresar');
const correo_ingresar = document.querySelector('#correo_ingresar');
const telefono_ingresar = document.querySelector('#telefono_ingresar');
const btn_reg = document.querySelector('#btn_reg_cli');

//btn_reg.addEventListener('click', function(){
  //  window.location.href = `agregar/${rut_ingresar.value}/${nombre_ingresar.value}`
//})

fetch("http://localhost:3000/vuelo")
    .then(res => res.json())
    .then(datos => mostrarv(datos)) //aqui llamo a la funcion mostrar y me renderisa los datos 
    .catch(error => console.log(error));

const mostrarv = (datos)=>{
    const contenedor = document.querySelector("#tablavuelos")
    datos.forEach(element => {

        const col = document.createElement("tr")
        col.innerHTML = 
        `
			<td>${element.id_vuelo}</td>
			<td>${element.hora_partida}</td>
			<td>${element.hora_llegada}</td>
			<td>${element.ciudad_origen}</td>
			<td>${element.ciudad_destino}</td>
			<td>${element.aeropuerto_origen}</td>
			<td>${element.aeropuerto_destino}</td>
			<td>${element.pais_origen}</td>
			<td>${element.pais_destino}</td>
        `
        contenedor.appendChild(col);
    });
    
} 

