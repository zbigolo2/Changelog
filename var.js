var password = "siurson";

function passcheck() {


    if(document.getElementById('pass1').value != password) {
        alert('złe hasło, spróbuj ponownie.');
        return false;
}

if (document.getElementById('pass1').value == password) {
    alert('hasło poprawne.');
}
}

