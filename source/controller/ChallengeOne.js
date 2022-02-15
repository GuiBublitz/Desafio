class ChallengeOne {

    constructor(){

        this.form = document.getElementById('form-question-one');
        this.inputNumber = document.getElementById('input-number-question-one');
        this.txtbox = document.getElementById('txt-question-one');
        this.initialize();

    }
    initialize(){
        this.txtbox.readOnly = true;
        this.initEvents();
    }
    initEvents(){
        this.form.addEventListener('submit',(event)=>{
            event.preventDefault();
            this.calculate(this.inputNumber.value);
        });
    }
    calculate(n){
        let ast = '*';
        let text = ``;/** text var was created so that we can load the full text at a single time **/
        for(let i = 0; i < n; i++){
            text += `${this.spaceBar(n - i) + ast} \n`;
            ast += '*';
        }
        this.txtbox.value = text;
    }
    spaceBar(space){
        let str = '';
        for (let i = space; i > 1; i--){
            str += " ";
        }
        return str;
    }

}