export default class Quiz {    
    constructor(target, id, title, qst) {
        this.id = id;
        this.target = document.querySelector(target);
        this.backButton = this.target.querySelector('.quiz__back');
        this.qst = qst;
        this.currentQuestion = 0;
        this.questionsCount = qst.length;
        this.chosen = [];
        this.setCounter(1); 

        let h = document.createElement("H1"),
        t = document.createTextNode(title);
        h.classList.add('quiz__title');
        h.appendChild(t);
        this.target.prepend(h);

        this.questions = qst.map((item, qi) => {
            let wrp = document.createElement("div"),
                qst = document.createElement("p"),
                t = document.createTextNode(item.question),
                answersWrp = document.createElement("div"),
                answers = item.answers.map((element, i) => {                    
                    let answer = document.createElement("div"),
                        answerText = document.createElement("p"),
                        answerImg = document.createElement("img"),
                        atext = document.createTextNode(element.text);
                    answer.classList.add('quiz__answer'); 
                    answerText.appendChild(atext);
                    answerImg.src = element.image;                    
                    answer.id = `${qi}-${i}`;
                    answer.appendChild(answerImg);
                    answer.appendChild(answerText);
                    answersWrp.appendChild(answer);
                    answersWrp.classList.add('quiz__answers')
                    answer.addEventListener('click', ()=>this.chooseAnswer(qi, i, item.question))
                    return answer;  
                });
                qst.appendChild(t);
                wrp.appendChild(qst).appendChild(answersWrp);
                wrp.dataset.qst = qi;                
                wrp.className = 'quiz__question';
                if(qi == this.currentQuestion) {
                    wrp.className += ' is-active';
                }
            this.target.querySelector('.quiz__questions').appendChild(wrp)
        })

        this.backButton.addEventListener('click', ()=>{this.questionBack()})
    }

    chooseAnswer(qi, id, qst) {
        this.chosen[qi] = `${qi+1}) ${qst.substring(0, 10)}... - ${id+1} `;
        console.log(this.chosen)
        this.setQuestion(qi+1)
    }

    setCounter(counter, last) {
        if(last) {
            this.target.querySelector('.quiz__counter').innerHTML = 'Готово!';
            return;
        }
        this.target.querySelector('.quiz__counter').innerHTML = 'Вопросы: ' + counter + ' / ' + this.questionsCount;
    }

    setQuestion(qi) {
        this.setCounter(this.currentQuestion+2);
        //For old ZT form:
        this.target.dataset.result = this.chosen;

        this.hideQuestion(this.currentQuestion);
        this.currentQuestion = qi;

        if(this.currentQuestion > 0) {
            this.backButton.classList.add('is-active');
        }
        if(qi === this.qst.length) {
            this.target.querySelector('.quiz__final').className += ' is-active';
            this.setCounter(0, true);
            return;
        }
        
        this.showQuestion(qi)
    }

    questionBack() {    
        this.setCounter(this.currentQuestion);    
        if(this.currentQuestion === 1) {
            this.backButton.classList.remove('is-active');
        }        
        if(this.currentQuestion === this.qst.length) {
            this.target.querySelector('.quiz__final').classList.remove("is-active");
            this.currentQuestion--
            this.showQuestion(this.currentQuestion)
            return
        }        
        this.hideQuestion(this.currentQuestion)        
        this.currentQuestion--
        this.showQuestion(this.currentQuestion)   
    }

    hideQuestion(qi) {
        document.querySelector(`[data-qst="${qi}"]`).classList.remove("is-active");
    }

    showQuestion(qi) {
        document.querySelector(`[data-qst="${qi}"]`).classList.add("is-active");
    }

    send(url) {

    }
}