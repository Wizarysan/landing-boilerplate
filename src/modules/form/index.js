/*
    Create instance with:
        add collect listener to button
        collect fields method
        check fields method with pre-set checkers
        
        inputDom can accept wrapper of input and error message classes
        for example inputDom = {wrapper: 'field', error: 'error-message'}
        will search for Bulma's standart input wrapper, and then search for custom '.error-message' tag in it
*/

export default class Form {
    constructor(form, url, checkModel = {email: /.+\@.+\..+/, password: /\S+/, username: /\S+/}, inputDom = {}) {
        this.form = form;
        this.url = url;
        this.checkModel = checkModel;
        this.inputDom = inputDom;
        this.data = {}
        this.button = this.form.querySelector('.js-submit-form')
        this.button.addEventListener('click', event => {
            event.preventDefault();
            this.collect()          
        })
    }

    collect() {        
        this.inputs = Array.from(this.form.elements).filter(el => el.tagName !== 'BUTTON');
        if(this.check()) {
            this.inputs.forEach(el => {
                this.data[el.name] = el.value
            })
            this.send()      
        }  
    }

    check() {
        let passFlag = true;
        Array.from(document.querySelectorAll(this.inputDom.error)).forEach(error=>error.classList.add('is-invisible'))
        this.inputs.forEach(el => {
            el.classList.remove(this.inputDom.fieldWarningClass)
            if(this.checkModel[el.name]) {
                if(el.value.search(this.checkModel[el.name]) < 0) {
                    this.printError(el)
                    passFlag = false;
                }                
            }            
        })
        return passFlag;
    }

    send() {
        if(this.url) {
            
        } else {
            let params = {
                method: 'POST',
                body: JSON.stringify(this.data) 
            }
            fetch(this.form.dataset.send, params)
                .then(response => response.json())
                .then(json => console.log(json))
        }
    }

    printError(el) {        
        if(this.inputDom.wrapper) {
            let errorField = el.closest(this.inputDom.wrapper).querySelector(this.inputDom.error)
            errorField.classList.remove('is-invisible')            
        }
        el.classList.add(this.inputDom.fieldWarningClass)
        // Описать вариант без враппера (ближайшее поле)
    }
}
