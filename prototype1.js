// Variables
var a,b,solution,operation;
var aStock, bStock;



// Métier
function Calculer(a,b,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = a + b;
            break;
        case '-':
            _solution = a-b;
                break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
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
    solution = Calculer(a,b,operation);
    Afficher(solution);
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