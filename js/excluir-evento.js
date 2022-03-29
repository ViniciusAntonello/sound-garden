const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

// https://xp41-soundgarden-api.herokuapp.com/events/:id

const urlParams = new URLSearchParams(window.location.search)
const paramId = urlParams.get('id')

const inputName = document.querySelector('#nome')
const inputBanner = document.querySelector('#banner')
const inputAttractions = document.querySelector('#atracoes')
const inputDescription = document.querySelector('#descricao')
const inputDate = document.querySelector('#data')
const inputCapacity = document.querySelector('#lotacao')
const btnDelete = document.querySelector('#botaoDelete')

window.onload = async () => {
    const answer = await fetch(`${BASE_URL}/events/${paramId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const inputedAnswer = await answer.json()

    console.log(inputedAnswer);

    inputName.value = inputedAnswer.name
    inputBanner.value = inputedAnswer.psoter
    inputAttractions.value = inputedAnswer.attractions
    inputDescription.value = inputedAnswer.description
    inputCapacity.value = inputedAnswer.number_tickets

    // newDate = `${inputedAnswer.scheduled[8]}${inputedAnswer.scheduled[9]}/${inputedAnswer.scheduled[5]}${inputedAnswer.scheduled[6]}/${inputedAnswer.scheduled[0]}${inputedAnswer.scheduled[1]}${inputedAnswer.scheduled[2]}${inputedAnswer.scheduled[3]} ${inputedAnswer.scheduled[11]}${inputedAnswer.scheduled[12]}:${inputedAnswer.scheduled[14]}${inputedAnswer.scheduled[15]} `

    // inputDate.value = newDate


}
