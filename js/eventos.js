const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

//inicio REMOVER OS EVENTOS MODELOS DO HTML
function removeModelCards() {
    const cards = document.querySelectorAll('article.evento.card.p-5.m-3')
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        console.log(card);   //mostra os 3 articles iniciais do html

        card.remove()
    }
}

removeModelCards()
//fim REMOVER OS EVENTOS MODELOS DO HTML

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
    const response = await fetch(`${BASE_URL}/events`, options)
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
            + `<a href="?id=${evento._id}#modal-container" class="btn btn-primary">reservar ingresso</a>` //ja pega o id do evento para reserva
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
