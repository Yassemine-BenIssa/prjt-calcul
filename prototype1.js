// Variables
var a,b,resultat,action;
var aStock, bStock;
// Métier
function Calculer(a,b,action){
    let _résultat = undefined;
    switch (action) {
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

    if(a != undefined && b != undefined && action != undefined){

        afficheur.value = number;
    }else{
        if(aStock != undefined)
        afficheur.value += aStock 
        if(action != undefined)
            afficheur.value += action
        if(bStock != undefined)
            afficheur.value += bStock 

        }
 

}


function action(actionParam){
    if(action == undefined){
        action = actionParam;
        a = parseFloat(aStock);
        Afficher();
    }
}

function Egale(){
    a = parseFloat(aStock);
    b = parseFloat(bStock);
    résultat = Calculer(a,b,action);
    Afficher(résultat);
}

function Init(){
    a = undefined;
    b = undefined;
    aStock = undefined;
    bStock = undefined;
    action = undefined;
    let afficheur = document.getElementById("afficheur");

    afficheur.value = "";
}