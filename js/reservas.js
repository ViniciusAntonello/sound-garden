const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

const parametros = new URLSearchParams (window.location.search)
const id = parametros.get("id")

// inicio PUXAR DADOS DO BANCO DA API
const loadReservas = async () => {
    const params = new URLSearchParams(window.location.search);  //busca por parametro (id)
    const id = params.get("id");
    console.log(id);

    const reservas = await getEventById(id); //busca o evento pela id na API

    const div = document.getElementById("lista-reservas");
    for (let index = 0; index < reservas.length; index++) {
        const reserva = reservas[index];

    div.innerHTML += `<th scope="row">${index}</th>`
        + `<td class="name">${reserva.owner_name}</td>`
        + `<td>${reserva.owner_email}</td>`
        + `<td class="number_tickets">${reserva.number_tickets}}</td>`
        + `<td>
            <a href="reservas.html" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${reserva._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${re._id}" class="btn btn-danger">excluir</a>
            </td>`

    }
}

async function getReservasByEventId(id) {
    const recebe = {
        method: "GET",
        dataType: "JSON",
        headers: {
            "Content-Type": "application/json"
        }
    };
    //            assincrona
    const response = await fetch(`${BASE_URL}/bookings/event/${id}`, recebe)          //path param 
    return await response.json();

    console.log(response);
}


loadReservas();