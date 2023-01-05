// [ source: https://github.com/oc-courses/intro-javascript ]
/* 
* Exo 1: * Ecrivez un programme qui fait saisir un nom de jour à l'utilisateur,
* puis affiche le nom du jour suivant.
* S'il y a des erreurs de saisie (jour incorrect), cela doit être géré !
* A toi de voir comment.
* Essayer avec méthode "if... else" puis avec switch
*/

// code ici


/* 
* Exo 2:
* Complétez ce programme pour afficher l'heure qu'il sera dans une seconde.
* Attention, ce programme est moins simple qu'il en a l'air : validez votre solution 
* en la testant avec les entrées suivantes. Vous devez obtenir les résultats indiqués.
    14h17m59s => 14h18m0s
    6h59m59s => 7h0m0s
    23h59m59s => 0h0m0s (minuit)
*/

var heures = 14; // Faire varier cette variable entre 0 et 23
var minutes = 17; // faire varier cette variable entre 0 et 59
var secondes = 59; // faire varier cette variable entre 0 et 59

// Ajoutez votre code ici

/*
* Exo 3 
*
* Ecrivez un programme qui fait saisir la note d'examen d'un étudiant. 
* => utiliser: var moyenne = Number(prompt("Entrez une moyenne de baccalauréat :"));
* puis affiche si ce candidat est recalé (moyenne inférieure à 10), 
* reçu (moyenne entre 10 et 12) 
* ou reçu avec mention (moyenne supérieure ou égale à 12).
*/