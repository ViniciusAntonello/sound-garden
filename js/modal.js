//PARA PEGAR ID DO EVENTOTO
const getEventId = () => {
    const params = new URLSearchParams(window.location.search);  //busca por parametro (id)
    return params.get("id");
}

async function reservarTicket(form){   //form do html
    const cliente = {
        owner_name: form.nome.value,
        owner_email: form.email.value,
        number_tickets: parseInt(form.quantidadeingresso.value),
        event_id: getEventId()
    }

    const create = {
        method:"POST",
        body: JSON.stringify(cliente),
        headers:{
            "Content-Type": "application/json"
        }
    };

    console.log(cliente)
    const response = await fetch(`${BASE_URL}/bookings`, create);
    console.log(response);
    return await response.json();

}

document.querySelector("form.ticket-form")
    .addEventListener("click", (e)=>{
        e.preventDefault();

    if (e.target === document.getElementById('btn-sucess')) {
        alert('Reserva cadastrada! Voltar para pagina de eventos')
            window.location.href = "eventos.html";
    } else if (e.target === document.getElementById('btn-danger')) {
        alert('Nenhuma reserva cadastrada! Voltar para pagina de eventos')
            window.location.href = "eventos.html";
    }
})