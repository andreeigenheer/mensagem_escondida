let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector ('#decodificar');
let saida = document.querySelector("textarea");


codificar.addEventListener("click", ()=>{
saida.value = btoa(saida.value);
});

decodificar.addEventListener("click", ()=>{
    saida.value = atob(saida.value);
    });

    


