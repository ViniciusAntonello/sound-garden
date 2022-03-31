const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

//inicio REMOVER OS 3 ARTICLES MODELOS DO HTML
function removeModelCards() {
    const cards = document.querySelectorAll('article.evento.card.p-5.m-3')
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        console.log(card);   //mostra os 3 articles iniciais do html

        card.remove()
    }
}

removeModelCards()
//fim REMOVER OS 3 ARTICLES MODELOS DO HTML

//inicio PUXAR DADOS DO BANCO DA API
const options = {
    method:"GET",
    dataType:"JSON",
    headers:{
        "Content-Type": "application/json"
    }
};

getThreeEvents();


async function getThreeEvents(){
    //            assincrona
    const response = await fetch(BASE_URL, options)
    const listaEventos = await response.json();
    // console.log(listaEventos) //mostra o array de eventos

    const div = document.getElementById("lista-eventos");
    for (let index = 0; index < 3; index++) {
        const evento = listaEventos[index];

        const date = new Date(evento.scheduled);

        div.innerHTML += `<article class='evento card p-5 m-3' id='${evento._id}'>`
            + `<h2>${evento.name} - ${date.toLocaleDateString('pt-BR')}</h2>`
            + `<h4>${evento.attractions}</h4>`
            + `<p>${evento.description}</p>`
            + `<a href="#" class="btn btn-primary">reservar ingresso</a>`
            + "</article>"

            
    }
}
//fim PUXAR DADOS DO BANCO DA API
