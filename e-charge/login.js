function criarconta(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value

    if(email == "admin" && senha == "admin"){
        alert('sucesso');
        location.href = "home.html";
}
    else{
        alert('erro');
    }
}