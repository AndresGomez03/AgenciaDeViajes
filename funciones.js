// Mostrar vuelos disponibles en pantalla       BIEN

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

// REALIZAR RESERVA     LISTO

const btn_reservar = document.getElementById('btn_reservar');

btn_reservar.addEventListener("click", (e) => {
    e.preventDefault();
    const rut_reserva = document.getElementById("rut_reserva");
    const id_vuelo_reserva = document.getElementById("id_vuelo_reserva");

    fetch("http://localhost:3000/reservar", {method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        rut: rut_reserva.value,
        id_vuelo: id_vuelo_reserva.value
    })})
    .then(res => res.json())
    .then(datos => console.log(datos))
});

// CONSULTAR RESERVA        :(

const btn_consulta = document.getElementById('btn_consulta');

btn_consulta.addEventListener("click", (e) => {
    e.preventDefault();
    const rut_consulta_reserva = document.getElementById("rut_consulta_reserva");
    const id_vuelo_consulta = document.getElementById("id_vuelo_consulta");
    fetch("http://localhost:3000/consultareserva", {method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        rut: rut_consulta_reserva.value,
        id_vuelo: id_vuelo_consulta.value
    })})
    .then(res => res.json())
    .then(datos => console.log(datos))
});

// MODIFICAR CLIENTE        LISTO

const btn_mod = document.getElementById('btn_mod');

btn_mod.addEventListener("click", (e) => {
    e.preventDefault();
    const rut_modificar = document.getElementById("rut_modificar");
    const nom_modificar = document.getElementById("nom_modificar");
    const app_modificar = document.getElementById("app_modificar");
    const apm_modificar = document.getElementById("apm_modificar");
    const correo_modificar = document.getElementById("correo_modificar");
    const telefono_modificar = document.getElementById("telefono_modificar");
    fetch("http://localhost:3000/modificar", {method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        rut: rut_modificar.value,
        nombre_cliente: nom_modificar.value,
        apellido_paterno: app_modificar.value,
        apellido_materno: apm_modificar.value,
        correo: correo_modificar.value,
        n_telefono: telefono_modificar.value
    })})
    .then(res => res.json())
    .then(datos => console.log(datos))
});

//REGISTRAR CLIENTE         LISTO

const btn_reg = document.getElementById('btn_reg_cli');

btn_reg.addEventListener("click", (e) => {
    e.preventDefault();
    const rut_ingresar = document.getElementById("rut_ingresar");
    const nombre_ingresar = document.getElementById("nom_ingresar");
    const app_ingresar = document.getElementById('app_ingresar');
    const apm_ingresar = document.getElementById('apm_ingresar');
    const correo_ingresar = document.getElementById('correo_ingresar');
    const telefono_ingresar = document.getElementById('telefono_ingresar');
    console.log(nombre_ingresar.innerText);

    fetch("http://localhost:3000/agregar", {method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        rut: rut_ingresar.value,
        nombre_cliente: nombre_ingresar.value,
        apellido_paterno: app_ingresar.value,
        apellido_materno: apm_ingresar.value,
        correo: correo_ingresar.value,
        n_telefono: telefono_ingresar.value
    })})
    .then(res => res.json())
    .then(datos => console.log(datos))
});





// Mostrar la reserva consultada por el cliente     :(

fetch("http://localhost:3000/consultareserva")
    .then(res => res.json())
    .then(datos_reserva => cons_reserva(datos_reserva)) 
    .catch(error => console.log(error));


const cons_reserva = (datos_reserva)=>{
    const container = document.querySelector(".list-group-flush")
    datos_reserva.forEach(elemento=>{

        const col = document.createElement("div")
        col.innerHTML = `
    
        <td class="list-group-item">${elemento.id_reserva}</td>
        <li class="list-group-item">${elemento.id_estado_reserva}</li>
        <li class="list-group-item">${elemento.rut}</li>
        <li class="list-group-item">${elemento.id_vuelo}</li>
        
        `
        container.appendChild(col);
    })
    
}



// CANCELAR RESERVA     LISTO

const btn_cancel = document.getElementById('btn_cancel');

btn_cancel.addEventListener("click", (e) => {
    e.preventDefault();
    const rut_cancelar = document.getElementById("rut_cancelar");
    const id_vuelo_cancelar = document.getElementById("id_vuelo_cancelar");

    fetch("http://localhost:3000/cancelar", {method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        rut: rut_cancelar.value,
        id_vuelo: id_vuelo_cancelar.value
    })})
    .then(res => res.json())
    .then(datos => console.log(datos))
});