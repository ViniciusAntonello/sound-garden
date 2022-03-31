const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const options = {
    method:"GET",
    dataType:"JSON",
    headers:{
        "Content-Type": "application/json"
    }
};

getAllEvents();


async function getAllEvents(){
    //            assincrona
    const response = await fetch(BASE_URL, options)
    const listaEventos = await response.json();
    // console.log(listaEventos) //mostra o array de eventos

    const div = document.getElementById("lista-eventos");
    for (let index = 0; index < listaEventos.length; index++) {
        const evento = listaEventos[index];

        // console.log(evento);
        const date = new Date(evento.scheduled);

        div.innerHTML += `<article class='evento card p-5 m-3' id='${evento._id}'>`
            + `<h2>${evento.name} - ${date.toLocaleDateString('pt-BR')} ${date.toLocaleTimeString('pt-BR')}</h2>`
            + `<h4>${evento.attractions}</h4>`
            + `<p>${evento.description}</p>`
            + `<a href="#" class="btn btn-primary">reservar ingresso</a>`
            + "</article>"
    }
}


//CSS

document.querySelector('#lista-eventos').style.cssText = `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

// document.getElementById('lista-eventos').style.display = 'flex', flex;;
