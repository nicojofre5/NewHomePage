let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#btn-toggle');
const cerrar = document.querySelector('#close-btn');

menu_bar.addEventListener('click',function(){
    menu.classList.toggle('btn-togler-event')
});

cerrar.addEventListener('click', () => {
    menu.classList.remove('btn-togler-event');
})
