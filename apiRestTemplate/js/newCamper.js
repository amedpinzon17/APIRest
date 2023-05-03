

import { newCamper } from "../apiConnection/API.js";

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validateCamper)

function validateCamper (e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value
    const promedio = document.querySelector('#promedio').value
    const edad = document.querySelector('#edad').value
    const nivelIngles = document.querySelector('#nivelIngles').value
    const especialidad = document.querySelector('#especialidad').value
    const nivelCampus = document.querySelector('#nivelCampus').value
    const expertoTecnologia = document.querySelector('#expertoTecnologia').value


//literal objects enhancement
const camper = {
    nombre,
    promedio,
    edad,
    nivelIngles,
    especialidad,
    nivelCampus,
    expertoTecnologia
}
if(validate(camper)){
    alert('Todos los campor son obigatorios');
    return;
}
newCamper(camper)
}


function validate (obj){
    return !Object.values(obj).every(element => element !== '');
}







