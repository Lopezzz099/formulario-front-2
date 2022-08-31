const registerUser = {
    name: '',
    password: '',
    email: '',
};


const nameInput = document.querySelector('#nombre');
nameInput.addEventListener('keyup', (e) => {
    console.log(e.key);
    nameInput.value = getNormalizedName(nameInput.value);

    function getNormalizedName(name) {
        name = setUpperCaseOnlyToTheFirstLetter(name);
        name = removeNumbersFromText(name);
        return setUpperCaseAfterEachSeparation(name);
    }

    function setUpperCaseOnlyToTheFirstLetter(text) {
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    }

    function removeNumbersFromText(text) {
        const lastChar = parseInt(text[text.length - 1]);

        if (isNaN(lastChar) == false) {
            // si estamos acá, 'lastChart' es número
            return text.replace(lastChar, '');
        }

        return text;
    }

    function setUpperCaseAfterEachSeparation(text) {
        let nextIsUpperCase = true;
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (nextIsUpperCase) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }

            nextIsUpperCase = text[i] == ' ';
        }

        return newText;
    }
});
const errors1 = document.querySelector('.errors1');
const errors2 = document.querySelector('.errors2');
const errors3 = document.querySelector('.errors3');
const errors4 = document.querySelector('.errors4');
window.addEventListener('submit', (e) => {
    e.preventDefault();
        if (isNameValid() && isPasswordValid() && isPassValid() && !isEmailValid()) {
            registerUser.name = getName();
            registerUser.email = getEmail();
            registerUser.password = getPassword();
    
            console.log(registerUser);
        }
        if (!isNameValid()) {
            errors1.classList.remove("errors1");
        }
    
        if (!isPasswordValid()) {
            errors2.classList.remove("errors2");
        }
    
        if (!isPassValid()) {
            errors4.classList.remove("errors4");
        }

        if (isEmailValid()) {
            errors3.classList.remove("errors3");
        }
    
        function isNameValid() {
            if (errors1.classList == "") {
                errors1.classList.add("errors1");
            }
            return getName().length >= 1 && getName().length <= 25;
        }
    
        function isPasswordValid() {
            if (errors2.classList == "") {
                errors2.classList.add("errors2");
            }
            return getPassword().length >= 8 && getPassword().length <= 20;
        }
    
        function isPassValid() {
            if (errors4.classList == "") {
                errors4.classList.add("errors4");
            }
            return getPass()[0].checked;
        }

        function isEmailValid() {
            if (errors3.classList == "") {
                errors3.classList.add("errors3");
            }
            if(getEmail() === ''){
                errors3.classList.remove("errors3");
            }
        }
        function getName() {
            return document.querySelector('#nombre').value;
        }
    
        function getEmail() {
            return document.querySelector('#correo').value;
        }
    
        function getPassword() {
            return document.querySelector('#pass').value;
        }
    
        function getPass() {
            return document.getElementsByName('condiciones');
        }
    }
);