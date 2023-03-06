const paraules = document.querySelector('#input3');
const  afageix = document.querySelector('#Afegeix');
const  inverteix = document.querySelector('#Inverteix');
const resultat3 = document.querySelector('#resultat3');

var hi = [];

afageix.onclick = function(){
    hi.push(paraules.value);
    resultat3.value = hi;
}

inverteix.onclick = function(){
    resultat3.value = hi.reverse();
}