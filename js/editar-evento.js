const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const inputNome = document.getElementById('nome');
const inputPoster = document.getElementById('banner');
const inputAtracoes = document.getElementById('atracoes');
const inputDescricao = document.getElementById('descricao');
const inputData = document.getElementById('data');
const inputLotacao = document.getElementById('lotacao');

const loadEvent = async () => {
    const params = new URLSearchParams(window.location.search);  //busca por parametro (id)
    const id = params.get("id");

    const event = await getEventById(id); //busca o evento pela id na API
    const date = new Date(event.scheduled) //converte a string em data

    inputNome.value = event.name 
    inputPoster.value = event.poster
    inputAtracoes.value = event.attractions
    inputDescricao.value = event.description
    inputData.value = date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR')  //00/00/00 23:23
    inputLotacao.value = event.number_tickets
}

async function getEventById(id){
    const recebe = {
        method:"GET",
        dataType:"JSON",
        headers:{
            "Content-Type": "application/json"
        }
    };
    //            assincrona
    const response = await fetch(`${BASE_URL}/${id}`, recebe)          //path param 
    return await response.json();
    // console.log(eventoId) //mostra o array de eventos
}

loadEvent(); //faz acao quando abre a pagina

const formulario = document.querySelector('.col-6') 
formulario.addEventListener("submit", function(e){
    e.preventDefault(); 
    loadEvent(); //faz acao quando clica em enviar

    if(confirm('Atualizado! Voltar para pagina de eventos?')){
        window.location.href = "admin.html";
    }
}); 

async function updateEvent(form){   //form do html
    const event = {
        name: form.nome.value,
        poster: form.banner.value,
        attractions: form.atracoes.value.split(','),    //cria array
        description: form.descricao.value,
        scheduled: (new Date(form.data.value)).toISOString(), //transforma na data ISO
        number_tickets: parseInt(form.lotacao.value) //transforma em numero
    }

    const update = {
        method:"PUT",
        body: JSON.stringify(event),
        headers:{
            "Content-Type": "application/json"
        }
    };

    const params = new URLSearchParams(window.location.search);  //busca por parametro (id)
    const id = params.get("id");
    
    const response = await fetch(`${BASE_URL}/${id}`, update);
    console.log(response);
    return await response.json();
}

