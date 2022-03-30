const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const inputNome = document.querySelector('#nome');
const inputPoster = document.querySelector('#poster');
const inputAtracoes = document.getElementById('atracoes');
const inputDescricao = document.getElementById('descricao');
const inputData = document.getElementById('data');
const inputLotacao = document.getElementById('lotacao');

const resultado = document.querySelector(".eventos")

document
    .querySelector('#formulario')
    .addEventListener("submit", function(event){
        event.preventDefault(); 
    });

// form.onsubmit = (event) => {
//     event.preventDefault();    
// }


async function formulario() {

    const novoEvento = {
        name: inputNome.value,
        poster: inputPoster.value,
        attractions: inputAtracoes.value.split(','),    //cria array
        description: inputDescricao.value,
        scheduled: new Date(inputData.value).toISOString(), //transforma na data ISO
        number_tickets: parseInt(inputLotacao.value) //transforma em numero
    };
    
    console.log(JSON.stringify(novoEvento));
    
    const options = {
        method:"POST",
        body: JSON.stringify(novoEvento),
        headers:{
            "Content-Type": "application/json"
        }
    };

    //              sincrona
    const response = await fetch(BASE_URL, options);
    const responseContent = await response.json();
    console.log(responseContent);

    if(confirm('Evento! Voltar para pagina de eventos?')){
        window.location.href = "admin.html";
    }
}




