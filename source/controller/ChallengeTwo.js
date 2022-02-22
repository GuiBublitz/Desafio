class ChallengeTwo {

    constructor(){
        //labels
        this.minCharactersLabel = document.getElementById("min-characters");
        this.minNumbersLabel = document.getElementById("min-mumbers");
        this.minLowercaseLabel = document.getElementById("min-lowercase-letters");
        this.minUppercaseLabel = document.getElementById("min-uppercase-letters");
        this.minSpecialCharactersLabel = document.getElementById("min-special-character");
        
        this.divPanel = document.querySelector('.item-register-data');
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
            if(this.validatePassword(this.password.value)) this.writeOnPanel();
        })
    }

    writeOnPanel(){
        let liName = document.createElement('li');
        let liPassword = document.createElement('li');
        let ul = document.createElement('ul');
        liName.textContent = ` 
            Nome: ${this.name.value} 
        `
        liPassword.textContent = ` 
            Senha: ${this.password.value}
        `
        ul.appendChild(liName);
        ul.appendChild(liPassword);
        ul.setAttribute('style', 'border-bottom: 2px solid black; padding: 5px;');
        this.divPanel.appendChild(ul);
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

    updateScreen(answers){
        (answers.minCharacters) ? this.toggleClass('minCharacters', true) : this.toggleClass('minCharacters', false);
        (answers.minNumbers) ? this.toggleClass('minNumbers', true) : this.toggleClass('minNumbers', false);
        (answers.minUppercaseLetters) ? this.toggleClass('minUppercaseLetters', true) : this.toggleClass('minUppercaseLetters', false);
        (answers.minLowercaseLetters) ? this.toggleClass('minLowercaseLetters', true) : this.toggleClass('minLowercaseLetters', false);
        (answers.minSpecialCharacter) ? this.toggleClass('minSpecialCharacter', true) : this.toggleClass('minSpecialCharacter', false);
    }

    toggleClass(item, boolean){
        switch (item){
            case 'minCharacters':
                if(boolean){
                    this.minCharactersLabel.classList.add('done');
                    this.minCharactersLabel.classList.remove('required');
                } else {
                    this.minCharactersLabel.classList.remove('done');
                    this.minCharactersLabel.classList.add('required');
                }
                break;
            case 'minNumbers':
                if(boolean){
                    this.minNumbersLabel.classList.add('done');
                    this.minNumbersLabel.classList.remove('required');
                } else {
                    this.minNumbersLabel.classList.remove('done');
                    this.minNumbersLabel.classList.add('required');
                }
                break;
            case 'minUppercaseLetters':
                if(boolean){
                    this.minUppercaseLabel.classList.add('done');
                    this.minUppercaseLabel.classList.remove('required');
                } else {
                    this.minUppercaseLabel.classList.remove('done');
                    this.minUppercaseLabel.classList.add('required');
                }    
                break;
            case 'minLowercaseLetters':
                    if(boolean){
                        this.minLowercaseLabel.classList.add('done');
                        this.minLowercaseLabel.classList.remove('required');
                    } else { 
                        this.minLowercaseLabel.classList.remove('done');
                        this.minLowercaseLabel.classList.add('required');
                    }
                break;
            case 'minSpecialCharacter':
                if(boolean){
                    this.minSpecialCharactersLabel.classList.add('done');
                    this.minSpecialCharactersLabel.classList.remove('required');
                } else { 
                    this.minSpecialCharactersLabel.classList.remove('done');
                    this.minSpecialCharactersLabel.classList.add('required');
                }
                break;
        }
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