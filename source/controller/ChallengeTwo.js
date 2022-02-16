class ChallengeTwo {

    constructor(){
        this.form = document.getElementById('form-question-two');
        this.name = document.getElementById('name-form-question-two');
        this.password = document.getElementById('password-form-question-two');
        this.initialize();
    }

    initialize(){
        this.initEvents();
    }

    initEvents(){
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();

        })
    }

    validatePassword(password){
        let answers = {};
        answers.minCharactersObj    = this.minCharacters(password, 6)//This just bring to us some data that we are going to use later;
        answers.minCharacters       = answers.minCharactersObj['boolean'];
        answers.minNumbers          = this.minNumbers(password, 1);           
        answers.minUppercaseLetters = this.minUppercaseLetters(password, 1);  
        answers.minLowercaseLetters = this.minLowercaseLetters(password, 1); 
        answers.minSpecialCharacter = this.minSpecialCharacter(password, 1);
        this.updateScreen(answers);
        for (let item in answers){
            if(answers[item] == false)
            return false;
        }
        return true;
    }

    updateScreen(requirements){
        
    }

    minCharacters(word, min = 6){
        let obj = {};
        let newWord = word.replace(/\s/g, '');//remove all spaces from the word
        obj.value = newWord.length >= min? 0 : min - newWord.length;
        obj.boolean = newWord.length >= min;
        return obj;
    }

    minNumbers(word, min = 1){
        return !(word.replace(/\D/gim, '').length < min)//get only the string numbers
    }

    minUppercaseLetters(word, min = 1){
        let regex = /[a-zA-Z]/;
        let count = 0;
        for(let letter of word){
            if(regex.test(letter) && letter == letter.toUpperCase()) count += 1;
        }
        return count >= min;
    }
    
    minLowercaseLetters(word, min = 1){
        let regex = /[a-zA-Z]/;
        let count = 0;
        for(let letter of word){
            if(regex.test(letter) && letter == letter.toLowerCase()) count += 1;
        }
        return count >= min;
    }

    minSpecialCharacter(word, min = 1){
        let specialCharacter = '!@#$%^&*()-+';
        let count = 0;
        for(let letterWord of word){
            for (let letterSpecialCharacter of specialCharacter){
                if(letterWord == letterSpecialCharacter){
                    count += 1;
                }
            }
        }
        return count >= min;
    }
}