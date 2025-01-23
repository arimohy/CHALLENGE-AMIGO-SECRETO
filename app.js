let amigos=[];

function agregarAmigo(){
    let amigonuevo=document.getElementById("amigo").value.trim();
    
    if(isCorrectInput(amigonuevo)){
        amigos.push(amigonuevo);
        actualizarListaAmigos();
        ClearAmigo();
    }
}

function actualizarListaAmigos() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}


function isCorrectInput(entrada){
    if(!entrada){
        alert("Por favor, inserte un nombre.")
        return false;
    }
    if(amigos.includes(entrada)){
        alert("El amigo ya existe no se volvio a agregar");
        return false;
    }
    else{
        return true;
    }
}

function ClearAmigo(){
    document.getElementById("amigo").value = '';
}

function validarListaAmigos(){
    return (amigos.length>=1);
}
function sortearAmigo(){
    if(validarListaAmigos()){
        let nroramdon=Math.floor(Math.random()*(amigos.length));
        let amigoSecreto=amigos[nroramdon];
        document.getElementById("resultado").innerText =`Amigo secreto es: ${amigoSecreto}`;
    }
    else{
        alert("No hay amigos para sortear")
    }
}