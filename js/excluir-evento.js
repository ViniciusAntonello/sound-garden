const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const requestOption = {
    method: 'GET',
    redirect: 'follow'
};

const loadEvent = async () => {
    const request = await fetch(`${BASE_URL}/events/${id}`)
    const response = await request.json()
    const {name, poster, attractions, description, scheduled, number_tickets } = response

    console.log(response);

    const inputName = document.querySelector('#nome');
    const inputBanner = document.querySelector('#banner');
    const inputAttractions = document.querySelector('#atracoes');
    const inputDescription = document.querySelector('#descricao');
    const inputDate = document.querySelector('#data');
    const inputCapacity = document.querySelector('#lotacao');

    const date = new Date(scheduled) //converte a string em data

    inputName.value = name
    inputBanner.value = poster
    inputAttractions.value = attractions
    inputDescription.value = description
    inputDate.value = date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR')
    inputCapacity.value = number_tickets
}
loadEvent();

const formulario = document.querySelector('form.col-6')

console.log(formulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    loadEvent();

    if(confirm('Evento Excluido! Voltar para pagina de eventos?')){
        window.location.href = "admin.html";
    }
})

// Desativando áreas de input

const disabledInputs = document.getElementsByTagName('input');
for (let i = 0; i < disabledInputs.length; ++i){
    disabledInputs[i].setAttribute('disabled', "");
}

const disabledTextarea = document.querySelector('textarea');
disabledTextarea.setAttribute('disabled', "");

// Fim da áreas de input

async function deleteEvent() {
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    }
    const request = await fetch(`${BASE_URL}/events/${id}`, requestOptions);
    return await request.json();
}