'use strict'

let btnOpen = document.querySelector('.btn-open');
let modal = document.querySelector('.modal');
let modalCloseBtn = document.querySelector('.modal__close-btn');
let modalWindow = document.querySelector('.modal-window');
let body = document.querySelector('.body');


let openModal = () => {
    modal.classList.add('modal--open');
    body.classList.add('body--fixed')
}
let closeModal = () => {
    modal.classList.remove('modal--open');
    body.classList.remove('body--fixed');
}

btnOpen.addEventListener('click', openModal);

modal.addEventListener('click', (event)=>{
    // let target = event.target
    // if(target && target.classList.contains('modal') ){
    //     console.log('fdfdfdf');
    //     modal.classList.remove('modal--open');
    // }
    if(event.target == modalCloseBtn || event.target != modalWindow ){
        closeModal();
    }
});

document.addEventListener('keydown', (event) =>{
    console.log(event.code)
    if(event.code == 'Escape' && modal.classList.contains('modal--open')){
        closeModal();
    }
})