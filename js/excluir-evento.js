const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const inputName = document.querySelector('#nome')
const inputBanner = document.querySelector('#banner')
const inputAttractions = document.querySelector('#atracoes')
const inputDescription = document.querySelector('#descricao')
const inputDate = document.querySelector('#data')
const inputCapacity = document.querySelector('#lotacao')


// METÓDO 1 - Tomei por base o código da Tiaki


// const loadEvent = async () => {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get("id");

//     const event = await getEventById(id);
//     const date = new Date(event.scheduled);

//     inputName.value = event.name
//     inputBanner.value = event.psoter
//     inputAttractions.value = event.attractions
//     inputDescription.value = event.description
//     inputDate.value = date.toLocaleDateString('pt-BR') + ' '+ date.toLocaleTimeString('pt-BR')
//     inputCapacity.value = event.number_tickets

// }

// async function getEventById(id) {
//     const receive = {
//         method: "GET",
//         dataType: "Json",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     };
// }

// loadEvent();


// MÉTODO 2 - Um Frankstain de códigos e vídeos =/

const urlParams = new URLSearchParams(window.location.search)
const paramId = urlParams.get('id')

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
