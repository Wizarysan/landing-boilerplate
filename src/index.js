import style from "./_scss/main.scss";
import AOS from 'aos';
import Inputmask from "inputmask";
import { ready } from './modules/utility';
import Modal from './modules/modal';
import Form from './modules/form';
import Quiz from './modules/quiz';

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
    Inputmask().mask(document.querySelectorAll("input"));
}

let createQuiz = () => {
    const testQuiz = new Quiz('#test-quiz', 't-quiz', 'Тестовый Квиз', [
        {question: 'Какой стиль вам нравится?',
            answers: [
                {text: 'Хайтек', image: 'test1.jpg'},
                {text: 'Второе название стиля', image: 'test2.jpg'},
                {text: 'Ещё какое-то название стиля', image: 'test3.jpg'},
            ]},
        {question: 'Прив чё дел?',
        answers: [
            {text: 'Да', image: 'test1.jpg'},
            {text: 'Нет', image: 'test2.jpg'},
        ]},    
        {question: 'Ещё один вопрос?',
        answers: [
            {text: 'Да', image: 'test1.jpg'},
            {text: 'Нет', image: 'test2.jpg'},
        ]},    
    ])
}

ready([addModals, prepareForms, createQuiz])