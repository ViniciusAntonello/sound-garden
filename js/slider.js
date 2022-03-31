
// Slider simplificado

let timer = 3500;
let imageIndex = 0;
let imgs = document.querySelectorAll('#slider img');    
let numbImgs =  imgs.length;

function nextImage() {
    imgs[imageIndex].classList.remove('selected')
    imageIndex++

    if(imageIndex >= numbImgs) {
        imageIndex = 0
    }

    imgs[imageIndex].classList.add('selected')
}

function start() {
    setInterval(() => {
        nextImage()
    }, timer)
}

window.addEventListener('load', start)

// Fim do slider simplificado

// Tentativa mais complexa, mas mais bonita

// const title = document.querySelector('.text-center');

// title.setAttribute('style', 'background-color: #F8BBD0; display: flex; transition: transform 0.5s ease-in-out; transform: translateX(0); overflow: hidden, height: 500px; widht: 500px')

// const img = `<div id='containerImg' style='display: flex; transition: transform 0.5s ease-in-out; transform: translateX(0)'>
// <img src="img/Sound-logo (1).png" width="300" alt="" style="object-fit: cover; height: 500px; widht: 500px">
// <img src="img/Sound-logo.png" width="300" alt="">
// <img src="img/Sound-logo-white (1).png" width="300" alt="">
// </div>
// `
// title.innerHTML = img

// const unica = document.querySelector('.text-center img')
// const capivarias = document.querySelectorAll('.text-center img');

// let idx = 0;

// function slider() {
//     idx++;

//     if(idx > capivarias.length -1){
//         idx = 0
//     }

//     unica.style.transform = `translateX(${-dx * 500})`
// }