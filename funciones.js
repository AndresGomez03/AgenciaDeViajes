
//REGISTRAR CLIENTE

/* const btn_reg = document.getElementById('#btn_reg_cli');

btn_reg.addEventListener("click", function(){
    const rut_ingresar = document.getElementById("#rut_ingresar");
    const nombre_ingresar = document.getElementById('#nom_ingresar');
    const app_ingresar = document.getElementById('#app_ingresar');
    const apm_ingresar = document.getElementById('#apm_ingresar');
    const correo_ingresar = document.getElementById('#correo_ingresar');
    const telefono_ingresar = document.getElementById('#telefono_ingresar');
    const btn_reg = document.getElementById('#btn_reg_cli');
    window.location.href = `agregar/${rut_ingresar.value}/${nom_ingresar.value}/${app_ingresar.value}/${apm_ingresar.value}/${correo_ingresar.value}/${telefono_ingresar.value}`
    console.log("Estoy siendo agregado")
}) */

// Mostrar vuelos disponibles en pantalla

fetch("http://localhost:3000/vuelo")
    .then(res => res.json())
    .then(datos => mostrarv(datos)) //aqui llamo a la funcion mostrar y me renderisa los datos 
    .catch(error => console.log(error));

const mostrarv = (datos)=>{
    const contenedor = document.querySelector(".table")
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

// Mostrar la reserva consultada por el cliente

fetch("http://localhost:3000/vuelo")
    .then(res => res.json())
    .then(datos => mostrarv(datos)) //aqui llamo a la funcion mostrar y me renderisa los datos 
    .catch(error => console.log(error));


const cons_reserva = (datos_reserva)=>{
    const container = document.querySelector(".list-group-flush")
    datos_reserva.forEach(elemento=>{

        const col = document.createElement("li")
        col.innerHTML = `
    
        <li class="list-group-item">${elemento.id_reserva}</li>
        <li class="list-group-item">${elemento.id_estado_reserva}</li>
        <li class="list-group-item">${elemento.rut}</li>
        <li class="list-group-item">${elemento.id_vuelo}</li>
        
    
        `

    })
    
}
