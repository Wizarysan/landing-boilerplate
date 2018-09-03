/*
    Create instance with:
        add collect listener to button
        helper text class with default
        collect fields method
        check fields method with pre-set checkers 
*/

export default class Form {
    constructor(form) {
        this.form = form;
        this.button = this.form.querySelector('.js-submit-form')
        this.button.addEventListener('click', event => {
            event.preventDefault();
            this.collect()          
        })
    }

    collect() {
        console.log(this.form.elements);        
    }

    check() {

    }

}

// const collectForm = (form) => {
//     console.log(form.elements)
// }

// const checkField = (field, checker) => {

// }

