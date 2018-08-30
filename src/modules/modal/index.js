export default class Modal {
    /*TODO add Generic modal option*/
    
    constructor(overlay) {
        Modal.allmodals = [];
        this.overlay = overlay;
        const closeButton = overlay.querySelector('.js-close-modal')
        closeButton.addEventListener('click', this.close.bind(this));
        overlay.querySelector('.modal__backdrop').addEventListener('click', e => {
            if (e.srcElement.id === this.overlay.id) {
                this.close();
            }
        });
    }

    open() {    
        this.overlay.classList.add('is-active');
        Modal.allmodals.push(this)
    }
  
    close() {
        this.overlay.classList.remove('is-active');
        Modal.allmodals.pop(this)
    }

    closeAll() {
        /*TODO*/
    }
}