//3. 

const url = "http://localhost:4000/campers";

//Odtener todos los camper de la API - (GET) metodo HTTP

export const getCampers = async () =>{
    try{
        const result = await fetch (url);
        const campers = await result.json();
        return campers;
    }catch(error){
        console.log(error);
    }
 
}

//onsertar nuevo camper ne REST API (Metodo HTTP: POST)


export const newCamper = async (camper) => {
    console.log(camper);
    try{
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(camper),
            headers: {
                'content-Type' :' application/json'
            }
        });
        window.location.href = 'index.html'
    }catch(error){
        console.log(error);
    }
}























