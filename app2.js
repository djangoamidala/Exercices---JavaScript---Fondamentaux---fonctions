// Demande une valeur comprise entre 1 et 10, si ce n'est pas le cas renvoi une alert  
do {
    number = prompt("Merci de saisir un nombre compris entre 1 et 10")
    if (isNaN(number) || number < 1 || number > 10) {
        alert("Merci d'entrer une valeur correct")
    }
} while (isNaN((number)) || number < 1 || number > 10);
// i incrémante de 1 à chaque tour, ce qui exécute 10 fois l'action
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
}
// Fonction qui renvoi la table de multiplication de 1 à 10 d'un nombre choisi 
function calcul(number) {
    console.log("user choose")
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}
// appel de la fonction calcul
calcul(number)