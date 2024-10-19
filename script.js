let nom = "Djess";
let Age = 25;

console.log(" Bonjour " + nom + " vous avez " + Age + " d'age ");

nom = "edonak";

console.log(" Bonjour " + nom + " vous avez " + Age + " d'age ");


//Opérateur//
/*
Ils permettent de comparer des valeurs :
Égal : == (teste si deux valeurs sont égales)
Strictement égal : === (teste si deux valeurs sont égales et de même type)
Différent : !=
Strictement différent : !==
Supérieur : >
Inférieur : <
Supérieur ou égal : >=
Inférieur ou égal : <=
*/

/*
Les opérateurs en JavaScript : les outils pour manipuler les données
Les opérateurs en JavaScript sont des symboles spéciaux qui permettent d'effectuer des opérations sur des variables et des valeurs. Ils sont essentiels pour réaliser des calculs, des comparaisons, des affectations et bien plus encore.

Les différents types d'opérateurs
1. Opérateurs arithmétiques
Ils permettent d'effectuer des opérations mathématiques de base :

Addition : + (ex : let somme = 5 + 3;)
Soustraction : -
Multiplication : *
Division : /
Modulo (reste d'une division) : %
Incrémentation : ++ (ajoute 1)
Décrémentation : -- (soustrait 1)
2. Opérateurs d'affectation
Ils servent à attribuer une valeur à une variable :

Affectation simple : = (ex : let x = 10;)
Affectation avec opération : +=, -=, *=, /=, %= (ex : x += 5; équivaut à x = x + 5;)
3. Opérateurs de comparaison
Ils permettent de comparer des valeurs :

Égal : == (teste si deux valeurs sont égales)
Strictement égal : === (teste si deux valeurs sont égales et de même type)
Différent : !=
Strictement différent : !==
Supérieur : >
Inférieur : <
Supérieur ou égal : >=
Inférieur ou égal : <=
4. Opérateurs logiques
Ils sont utilisés pour combiner des expressions booléennes :

ET logique : && (les deux expressions doivent être vraies)
OU logique : || (au moins une des expressions doit être vraie)
NON logique : ! (inverse la valeur booléenne)
5. Opérateur ternaire
C'est une forme abrégée de la condition if...else
*/

let a = 12; 
let b ="12"
let c = "moi"; 
let d ="moi"

console.log(a === b || c === d)

/* && logique, les deux conditions doivent etre vrai, sinon la solution finale est fausse
  || logique, l'une des conditions doit etre vrai
 */