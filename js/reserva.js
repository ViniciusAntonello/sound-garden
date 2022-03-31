const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const tituloEvento = document.querySelector('titulo');
const dadosTabela = document.querySelector('tbody');

async function listaEvento () {
    const params = new URLSearchParams(window.location.search).get('id');  //busca por parametro (id)
    const nomeDoEvento = new URLSearchParams(window.location.search).get('eventName');
    tituloEvento.innerHTML = nomeDoEvento

    const configuracao = {
        method:'GET',
        headers: {
            "Content-Type": "application/json",
        },
        redirect: 'follow'
    }
    const resposta = await fetch(`${BASE_URL}bookings/event/${parametros}`, configuracao);
    console.log(resposta);
    const conteudoResposta = await resposta.json()
    console.log(conteudoResposta);
    conteudoResposta.forEach(item => {
        dadosTabela.innerHTML +=
        `<tr>
        <th scope="row">${conteudoResposta.indexOf(item)+1}<th>
        <td>${item.owner_name}</td>
        <td>${item.owner_email}</td>
        <td>${item.number_tickets}</td>
        <td>
            <button reservaID='${item._id}' onClick="deletarReserva(this)" class="btn btn-danger">excluir</button>
        </td>
    <tr>`

    })

    listarEventos ()

    async function deletarReserva(e) {
        const id = e.getAttribute('reservaID')
        const configuracao = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            redirect: 'follow'
        }
        const resposta = await fetch(`${BASE_URL}/booking/${id}`, configuracao);
        console.log(resposta);

        location.reload();
    }
}
