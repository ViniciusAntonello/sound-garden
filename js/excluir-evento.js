const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const inputName = document.querySelector('#nome');
const inputBanner = document.querySelector('#banner');
const inputAttractions = document.querySelector('#atracoes');
const inputDescription = document.querySelector('#descricao');
const inputDate = document.querySelector('#data');
const inputCapacity = document.querySelector('#lotacao');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const requestOption = {
    method: 'GET',
    redirect: 'follow'
};

const request = async () => {
    const request = await fetch(`${BASE_URL}/events/${id}`)
    const response = await request.json()
    const {name, poster, attraction, description, schedule, number_tickets} = response

    inputName.value = name
    inputBanner.value = poster
    inputAttractions.value = attraction
    inputDescription.value = description
    inputDate.value = schedule
    inputCapacity.value = number_tickets
}

request();

form.addEventListener('submit', async event => {
    event.preventDefault()
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    }
    const request = await fetch(`${BASE_URL}/events/${id}`, requestOption);
    alert('Evento excluido!')
    window.location.replace('./admin.html')
})
