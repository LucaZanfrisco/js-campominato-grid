'use strict';

// Funzioni
//Funzione che crea un elemento con un evento click al suo interno
function creaElemento(tagElemento, nomeClasse, difficolta, i){
    const elemento = document.createElement(tagElemento);
    elemento.classList.add(nomeClasse);
    elemento.classList.add(difficolta);
    elemento.innerText = i;
    elemento.addEventListener(
        'click',
        function(){
            console.log(i);
            elemento.classList.add('cliccato');
        }
    )
    return elemento;
}
// Funzione che appende elementi al DOM
function appendiElemento(elementoCreato, appendino){
    appendino.append(elementoCreato);
}

// --------

// Main
// Assegnazione a due variabili elementi del DOM
const tavoloGioco = document.querySelector('.tavolo');
const gioca = document.querySelector('.btn');

// Evento che genera un una tabella al click del bottone gioca
gioca.addEventListener(
    'click',
    function(){
        // Svuotamento del DOM
        tavoloGioco.innerHTML= '';
        // Presa del valore della difficolta 
        const difficolta = document.getElementById('difficolta').value;
        let classeDifficolta = '';
        let maxCelle = 0;
        // Switch con cambio classe e massimo numero di celle in base alla difficolta scelta
        switch(difficolta){
            case '81':
                classeDifficolta = 'cella-9';
                maxCelle = 81;
                break;
            case '49':
                classeDifficolta = 'cella-7';
                maxCelle = 49;
                break;
            default: 
                classeDifficolta = 'cella-10';
                maxCelle = 100;
        };
        // Ciclo che crea un numero di celle in base alle scelte precedenti
        for(let i = 1; i <= maxCelle; i++){
            const elemento = creaElemento('div', 'cella',classeDifficolta , i);
            appendiElemento(elemento,tavoloGioco);
        }
    }
)



// --------