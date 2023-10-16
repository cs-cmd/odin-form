

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
    let code = passwordsMatch(passwordField, passwordConf);

    console.log(code);

    switch(code) {
        case 0:
            document.querySelector('.register-form').submit();
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
        errParts.innerText = '';
    }
}
document.querySelector('.submit-button').addEventListener('click', submitForm);
