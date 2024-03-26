//alert('ok')
/**  afin de modifiernotre opage html selon les interactions de'un utilisateur nous allons modifier notre DOM grace a javascript
*
*/

//---------------------------
//  SELECTIONNER NOS ELEMENTS
//----------------------------


//Selection via tag 

let title = document.getElementsByTagName('h1');
console.log(title);

let lesP = document.getElementsByTagName('p')
console.log(lesP);// on cherche tout les paragraphes de notre pages.
//on récupère un array (tableau ) d'éléments.
console.log(lesP);
//Grace a la variables dans laquelle j'ain electionner tout les p je peut viser un seul des éléments grace a son index.

//Pour faire du css j'utilis la propriété 'style'suivi des memes déclarations que j'utilise en CSS avec du CamelCase a la place de  kebab-Case.

//La propriété style permet d'accéder finement au styles qui concernent un élément particulier.
lesP[0].style.backgroundColor = " red ";
lesP[0].style.color ="white";
lesP[0].style.fontWeight ="bold";


//Selection via id 

let titre = document.getElementById("titre");
console.log(titre);

//Selection via classe 

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);
// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

console.log(selectClass[1]);

console.log(selectClass[1].innerHTML);

// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

let subtitle = document.getElementsByClassName("subtitle");
console.log(subtitle)
subtitle[0].innerHTML="Ceci est le titre modifié  avec javascript ";

//correction : let aChanger =document.getElementsByClassName("subtitle");
//console.log(aChanger.innerHTML = strong)


// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.



let lesP= document.getElementsByTagName("p");


//lesP[0].style.textTransform="uppercase";
//lesP[1].style.textTransform="uppercase";
//lesP[2].style.textTransform="uppercase";
//lesP[3].style.textTransform="uppercase";
//lesP[4].style.textTransform="uppercase";

//2eme façon de faire
for (let i = 0 ; i < lesP.lenght; i++) { 

     lesP[i].style.textTransform="uppercase";

}

//3eme façon de faire et la plus simple .

for ( let p of lesP) { 
     p.style.textTransform="uppercase";

}
// Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.

console.log(LesP)

