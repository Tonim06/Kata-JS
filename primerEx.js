const nom = document.querySelector('#Nom');
const boto = document.querySelector('#primerBoto');
const resultat = document.querySelector('#resultat');


boto.onclick = function(){
    resultat.value = ((nom.value.replaceAll(/ /g,'')).toLowerCase()).replaceAll('à','a').replaceAll('á','a').replaceAll('è','e').replaceAll('é','e').replaceAll('ù','u').replaceAll('ú','u').replaceAll('ò','o').replaceAll('ó','o').replaceAll('ì','i').replaceAll('í','i');
}
