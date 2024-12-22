function validation() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let pass2 = document.getElementById("password2").value;
    console.log(username,pass,pass2);
    if (username != "" && pass != "" && pass2 != "" && pass == pass2) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}