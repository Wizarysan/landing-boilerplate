import style from "./_scss/main.scss";
import AOS from 'aos';
import Inputmask from "inputmask";
import { ready } from './modules/utility';
import Modal from './modules/modal';
import Form from './modules/form';

/* Add modal explictly to prevent mess */
let addModals = () => {    
    const testModal = new Modal(document.querySelector('.test-modal'), '.js-open-modal')
    const testModal2 = new Modal(document.querySelector('.test-modal2'), '.js-open-modal2')
}

let prepareForms = () => {
    // const testForm = new Form(
    //     document.querySelector('.test-form'),
    //     'test.php', 
    //     undefined, 
    //     {wrapper: '.field', error: '.error-message', fieldWarningClass: 'is-danger'}
    // )
    const loginForm = new Form(
        document.querySelector('.login-form'),
        undefined, 
        undefined, 
        {wrapper: '.field', error: '.error-message', fieldWarningClass: 'is-danger'}
    )
    const phoneForm = new Form(
        document.querySelector('.phone-form'),
        undefined, 
        undefined, 
        {wrapper: '.field', error: '.error-message', fieldWarningClass: 'is-danger'}
    )
    const ыьыАщкь = new Form(
        document.querySelector('.sms-form'),
        undefined, 
        undefined, 
        {wrapper: '.field', error: '.error-message', fieldWarningClass: 'is-danger'}
    )
    Inputmask().mask(document.querySelectorAll("input"));
    document.querySelector('.js-reveal-sms').addEventListener('click', ()=>{
        document.querySelector('.phone-form').classList.add('is-hidden')
        document.querySelector('.sms-form').classList.remove('is-hidden')
    })
}

// ready([addModals, prepareForms])
ready([prepareForms])