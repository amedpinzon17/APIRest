const nose = document.querySelector('#contenedor')




document.addEventListener('DOMContentLoaded',() => {
    contenApi()
} )

async function contenApi(){
    const url = "../DB/db.json"
    try{
        const result = await fetch(url)
        const datos = await result.json()
        inyertarCart(datos.campers)
        inyertarCart(datos.campers)
    }catch(error){
        console.log(error);
    }
}


function inyertarCart(datos){
    let html = ''
    datos.forEach((dato) =>{
        
        const {imagen,nombre, promedio, especialidad, expertoTecnologia, id} = dato
        exampleModalLabel.innerHTML=`${nombre}`
        html = `
        <tr>
            <td>${id}</td>
            <td> <img src ="img/${imagen}" class="cuenta"></td>
            <td>${nombre}</td>
            <td>${promedio}</td>
            <td>${especialidad}</td>
            <td>${expertoTecnologia}</td>
            <td><button id='${id}'  type="button" >Ver</button></td>
        </tr>
  
        `
        nose.innerHTML += `${html}`

    
    })

}
