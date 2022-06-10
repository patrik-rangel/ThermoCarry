// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


/* Dashboard */

function clearClass() {
    let classCritico = modal_container.classList.contains('modal_critico')
    let classEmergencial = modal_container.classList.contains('modal_emergencial')
    let classAlerta = modal_container.classList.contains('modal_alerta')

    if (classCritico = true){
        modal_container.classList.remove('modal_critico')
    }
    if(classEmergencial = true){
        modal_container.classList.remove('modal_emergencial')
    }
    if(classAlerta = true){
        modal_container.classList.remove('modal_alerta')
    }
}

let contCritico = 0
let contEmergencia = 0
let contAlerta = 0