function libera(){
    var agente = prompt("Digite seu nome");
    var senha = prompt("Digite sua senha");
             
    if (senha === "souresiliente") {
     return alert ("Olá novamente, Agente " + agente + "!")
    }
    
    else {
         return alert ("SENHA INVALIDA")
   }
   
}