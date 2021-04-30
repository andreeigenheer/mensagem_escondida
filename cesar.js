let inicio = document.querySelector("#inicio");
let chaveInput = document.querySelector("#chave");
let codificada = document.querySelector("#codificada");

let mensagem = inicio.value;

inicio.addEventListener("input", caracter, false);

function caracter(e) {

  mensagem = e.target.value;
  mensagem = mensagem.toLowerCase();
  mensagem = mensagem.replace(/[^a-z]/, '');

  e.target.value = mensagem;
 
  cesar();
}

function cesar() {
    let codificadaMensagem = "";
    let chave = chaveInput.value ? Number(chaveInput.value) : 0;
    console.log(chave);
  
    for (letra of mensagem) {
      codificadaMensagem += chaveLetra(letra, chave);
    }
  
    console.log(codificadaMensagem);
    codificada.value = codificadaMensagem;
  }
  cesar();

  function chaveLetra(letra, chave) {
    let novaLetra = "";
  
    let letraCodigo = letra.charCodeAt(0);
    let novaLetraCodigo = letraCodigo + (chave % 26);
  
    if (novaLetraCodigo < 97) {
    
      novaLetraCodigo += 26;
    } else if (novaLetraCodigo > 122) {
     
      novaLetraCodigo -= 26;
    }
  
    novaLetra = String.fromCharCode(novaLetraCodigo);
    
    return novaLetra;
  }