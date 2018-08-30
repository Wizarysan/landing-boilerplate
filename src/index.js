import style from "./_scss/main.scss";
import AOS from 'aos';
import { ready } from './modules/utility';
import Modal from './modules/modal';
import { collectForm } from './modules/form';

/* Add modal explictly to prevent mess */
let addModals = () => {    
    const testModal = new Modal(document.querySelector('.test-modal'))
    document.querySelector('.js-open-modal').addEventListener('click', ()=>{testModal.open()})

    const testModal2 = new Modal(document.querySelector('.test-modal2'))
    document.querySelector('.js-open-modal2').addEventListener('click', ()=>{testModal2.open()})
}

let prepareForms = () => {
    let formsButtons = document.querySelectorAll('.js-submit-form');
    console.log(formsButtons)
    Array.from(formsButtons).forEach(button => {        
        button.addEventListener('click', event => {
            event.preventDefault();
            collectForm(button.closest('form'))            
        })
    })
}

ready([addModals, prepareForms])
