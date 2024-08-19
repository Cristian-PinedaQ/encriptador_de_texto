//Conexion de elementos al Dom

const btnEncriptar = document.querySelector(".btn__encriptar");
const textEncriptar = document.querySelector(".input__encriptar");
const alerta = document.querySelector(".container__text__alert");
const textEncriptado = document.querySelector(".text__encriptar");
const contenido = document.querySelector(".container__answer_card");
const btnCopy = document.querySelector(".btn__copy");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

// Logica btn Encriptar

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto == ""){
        alerta.style.background = "#052051"
        alerta.style.color ="#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Este campo de texto,no debe estar vacio";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== text){
        alerta.style.background = "#052051"
        alerta.style.color ="#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "No debe contener acentos y/o caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#052051"
        alerta.style.color ="#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto debe ser escrito todo en minuscula";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg,"enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        textEncriptado.innerHTML = texto;
        btnCopy.style.visibility = "inherit";
        contenido.remove();
    }
    
});

// Logica btn Desencriptar

btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textEncriptar.value;
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto == ""){
        alerta.style.background = "#052051"
        alerta.style.color ="#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== text){
        alerta.style.background = "#052051"
        alerta.style.color ="#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "No debe tener acentos y/o caracteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#052051"
        alerta.style.color ="#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto debe ser todo en minuscula";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg,"e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        textEncriptado.innerHTML = texto;
        btnCopy.style.visibility = "inherit";
        contenido.remove();
    }
    
});

// Logica btn Copy

btnCopy.addEventListener("click", e => {
    e.preventDefault();
    let copy = textEncriptado;
    copy.select();
    document.execCommand("copy");

});