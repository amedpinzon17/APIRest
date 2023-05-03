//3. importamos la funcion metodo HTTP - GET
import {getCampers} from '../apiConnection/API.js';

//1. fincion IIFE
(function (){
document.addEventListener('DOMContentLoaded', showCampers);
async function showCampers(){
    /* console.log('desde IIFE'); */
    const campers =  await getCampers();
    /* console.log(campers); */
    const contenedor = document.querySelector('tbody')
    campers.forEach((camper)=>{
        const {nombre, imagen, promedio, especialidad, expertoTecnologia, id} = camper;
        const rows = document.createElement('tr')
        rows.innerHTML = `
        <th scope = "row">${id}</th>
        <td><img class="cuenta" src="./img/${imagen}"></th>
        <td>${nombre}</td>
        <td>${promedio}</td>
        <td>${especialidad}</td>
        <td>${expertoTecnologia}</td>

        `
        contenedor.appendChild(rows)
    })
}
})();




















