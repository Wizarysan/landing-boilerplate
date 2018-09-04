import style from "./_scss/main.scss";
import AOS from 'aos';
import { ready } from './modules/utility';
import Modal from './modules/modal';
import Form from './modules/form';

/* Add modal explictly to prevent mess */
let addModals = () => {    
    const testModal = new Modal(document.querySelector('.test-modal'), '.js-open-modal')
    const testModal2 = new Modal(document.querySelector('.test-modal2'), '.js-open-modal2')
}

let prepareForms = () => {
    const testForm = new Form(
        document.querySelector('.test-form'),
        'test.php', 
        undefined, 
        {wrapper: '.field', error: '.error-message', fieldWarningClass: 'is-danger'}
    )
}

ready([addModals, prepareForms])
