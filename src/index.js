console.log(`I've been required by Webpack`);
import style from "./_scss/main.scss";
import AOS from 'aos';

import { ready } from './modules/utility';
import Modal from './modules/modal';

/* Add modal explictly to prevent mess */
let addModals = () => {    
    const testModal = new Modal(document.querySelector('.test-modal'))
    document.querySelector('.js-open-modal').addEventListener('click', ()=>{testModal.open()})

    const testModal2 = new Modal(document.querySelector('.test-modal2'))
    document.querySelector('.js-open-modal2').addEventListener('click', ()=>{testModal2.open()})
}

ready([addModals])
