const numero = document.querySelector('#calcularNombre');
const calcul = document.querySelector('#Seleccio');
const boto2 = document.querySelector('#butoDos');
const resultat1 = document.querySelector('#resultat2');

boto2.onclick = function(){
    if(calcul.value == 1){
        resultat1.value = (2*(Math.PI * numero.value)).toFixed(2);
    }else if(calcul.value == 2){
        resultat1.value = (Math.pow((Math.PI * numero.value),2)).toFixed(2)
    }else{
        resultat1.value = (4/3*(Math.pow((Math.PI * numero.value),3))).toFixed(2)
    }
}