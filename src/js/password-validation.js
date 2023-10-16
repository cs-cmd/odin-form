

function passwordsMatch(passwordField, confPasswordField) {
    let password = passwordField.value;
    let confPassword = confPasswordField.value;

    if (password.length === 0) {
        return 1;
    }
    if (password.length < 5) {
        return 2;
    }
    if (password !== confPassword) {
        return 3;
    }
    else {
        return 0;
    }
}

function submitForm() {
    let passwordField = document.getElementById('password');
    let passwordConf = document.getElementById('conf-password');
    let form = document.querySelector('.register-form');

    let code = passwordsMatch(passwordField, passwordConf);

    console.log(code);

    switch(code) {
        case 0:
            if (form.reportValidity()) {
                // document.querySelector('.register-form').submit();
                clearFields();
                printThankYou();
            }
            break;
        case 1: 
            printError('Password cannot empty', passwordField);
            break;
        case 2:
            printError('Password is too short', passwordField);
            break;
        case 3:
            let err = 'Passwords do not match';
            printError(err, passwordField);
            printError(err, passwordConf);
            break;
        default:
            console.log(`unknown error encountered: ${code}`);
            break;
    };
}

function printError(errMsg, sib) {
    let errPart = document.querySelector(`#${sib.id} + .errMsg`);
    errPart.innerText = errMsg;
}

function clearErrors() {
    let errParts = document.querySelector('.errMsg');
    for(let i = 0; i < errParts.length; ++i) {
        errParts[i].innerText = '';
    }
}
function clearFields() {
    let inputs = document.querySelectorAll('.register-form > .item-unit > input');
    console.log(inputs);
    for(let i = 0; i < inputs.length; ++i) {
        inputs[i].value = '';
    }
}

function printThankYou() {
    let thanksMsgEle = document.querySelector('.thank-you-text');

    thanksMsgEle.innerText = 'Thank you for submitting your data!';
}
document.querySelector('.submit-button').addEventListener('click', submitForm);
