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
        {question: 'Что посмотреть?',
            answers: [
                {text: 'Спорт', image: 'q1-1.jpg'},
                {text: 'Кино / Сериалы', image: 'q1-2.jpg'},
                {text: 'Мультфильмы', image: 'q1-3.jpg'},
                {text: 'Научно-познавательные фильмы', image: 'q1-4.jpg'}
            ]},
        {question: 'Сколько членов семьи??',
        answers: [
            {text: 'Я и кот', image: 'q2-1.jpg'},
            {text: '2', image: 'q2-2.jpg'},
            {text: 'Папа, мама, я', image: 'q2-3.jpg'},
            {text: 'Нас миллионы', image: 'q2-4.jpg'},
        ]},    
        {question: 'Где хотите (смотреть ТВ)?',
        answers: [
            {text: 'В спальне', image: 'q3-1.jpg'},
            {text: 'В гостинной', image: 'q3-2.jpg'},
            {text: 'На кухне', image: 'q3-3.jpg'},
            {text: 'Везде хочу!', image: 'q3-4.jpg'},
        ]},    
        {question: 'Какой цвет дарит скидки?',
        answers: [
            {text: 'Этот', image: 'q4-1.jpg'},
            {text: 'Этот', image: 'q4-2.jpg'},
            {text: 'Вот этот', image: 'q4-3.jpg'},
            {text: 'ЗЕЛЁНЫЙ', image: 'q4-4.jpg'},
        ]},    
    ])
}

ready([addModals, prepareForms, createQuiz])