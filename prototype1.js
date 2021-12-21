// Variables
var a,b,resultat,operation;
var aStock, bStock;
// Métier
function Calculer(a,b,operation){
    let _résultat = undefined;
    switch (operation) {
        case '+':
            _résultat = a + b;
            break;
        case '-':
            _résultat = a-b;

                break;
    }
    return _résultat;
}

// Présentation
function output(number){
    if(a == undefined){
        if(aStock == undefined) aStock = '';
        aStock += number;
    } 
    else {
        if(bStock == undefined) bStock = '';
        bStock += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";

    if(a != undefined && b != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(aStock != undefined)
        afficheur.value += aStock 
        if(operation != undefined)
            afficheur.value += operation
        if(bStock != undefined)
            afficheur.value += bStock 

        }
 

}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        a = parseFloat(aStock);
        Afficher();
    }
}

function Egale(){
    a = parseFloat(aStock);
    b = parseFloat(bStock);
    résultat = Calculer(a,b,operation);
    Afficher(résultat);
}

function Init(){
    a = undefined;
    b = undefined;
    aStock = undefined;
    bStock = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");

    afficheur.value = "";
}