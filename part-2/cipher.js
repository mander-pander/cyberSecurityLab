let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum)

const cipher = (input) => {
    let characters = input.split('');
    let incognito = "";
    for(let i = 0; i < characters.length; i++) {
        let charCode = characters[i].charCodeAt() + randomNum;
        console.log(charCode);
        let reverseCharCode = String(charCode).split('').reverse().join('');
        console.log(reverseCharCode)
        let newCharacters = String.fromCharCode(reverseCharCode);
        // console.log(newCharacters)
      	incognito += newCharacters;
    }
    return incognito;
}

let cipheredWord = cipher('I love coding');
console.log(cipheredWord)

const decipher = (input) => {
    let characters = input.split('');
    let notIncognito = "";

    for(let i = 0; i < characters.length; i++){
        let charCode = characters[i].charCodeAt();
        let reverseCharCode = String(charCode).split('').reverse().join('') - randomNum;
        let newCharacters = String.fromCharCode(reverseCharCode);
        notIncognito += newCharacters;
    }
    return notIncognito;
}

decipher(cipheredWord);
