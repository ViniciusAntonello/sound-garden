const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';


//inicio REMOVER OS 3 EVENTOS MODELOS DO HTML
function removeModelEvents() {
    // const card = document.getElementsByTagName('table')
    // console.log(card);   //mostra os 3 eventos iniciais do html

    // const lista = card.getElementById('tbody')
    // console.log(lista);

    const events = document.querySelectorAll('tr.eventos')
    console.log(events);

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        
        // console.log(event);
        event.remove()
    }
}

removeModelEvents()
// fim REMOVER OS 3 EVENTOS MODELOS DO HTML


//inicio PUXAR DADOS DO BANCO DA API
const options = {
    method:"GET",
    dataType:"JSON",
    headers:{
        "Content-Type": "application/json"
    }
};

getAllEvents()

async function getAllEvents(){
    //            assincrona
    const response = await fetch(BASE_URL, options)
    const listaEventos = await response.json();
    console.log(listaEventos) //mostra o array de eventos

    const div = document.getElementById("lista-eventos");
    for (let index = 0; index < listaEventos.length; index++) {
        const evento = listaEventos[index];

        const date = new Date(evento.scheduled);

        // console.log(div)

        div.innerHTML += `<th scope="row">${index}</th>`
        + `<td class="vanish">${date.toLocaleDateString('opt-BR')} ${date.toLocaleTimeString('pt-BR')}</td>`
        + `<td>${evento.name}</td>`
        + `<td class="vanish">${evento.attractions}</td>`
        + `<td>${evento.name}</td>`
        + `<td>
            <a href="reservas.html" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
            </td>`
    }

}
//fim PUXAR DADOS DO BANCO DA API




/* <tr>
    <th scope="row">1</th>
    <td>05/03/2022 20:00</td>
    <td>Festival Coala</td>
    <td>Miley Cyrus, Liniker, Smashing Pumpkins</td>
    <td>
        <a href="reservas.html" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html" class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html" class="btn btn-danger">excluir</a>
    </td>
</tr> */