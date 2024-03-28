// Afin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce a JavaScript.

//----------------------
    // SELECTIONNER NOS ELEMENTS
//----------------------

// Selection via TAG

let title = document.getElementsByTagName('h1');
console.log(title);

let lesP = document.getElementsByTagName('p'); // Ici on cherche, tous les paragraphes de notre page
// On récupère un Array (tableau) d'éléments. 
console.log(lesP);

// Grace a ma variable dans laquelle j'ai sélectionné tous les P, je peux viser un seul des éléments grâce à son index. Pour faire du CSS j'utilise la propriété 'style' suivi des meme déclaration que j'utilise en CS, avec du camelCase a la place de Kebab-case.
// La propriété 'style' permet d'acceder finement au style qui concerne un élément particulier.

lesP[0].style.backgroundColor = 'red';
lesP[0].style.color = 'white';
lesP[0].style.fontWeight = 'bold';

// Selection via ID

let titre = document.getElementById("titre");

titre.style.backgroundColor ='blue';
console.log(titre)

// Selectin via Classe
let selectClass = document.getElementsByClassName('selectClass')

console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

selectClass[1].style.backgroundColor = ('yellow');
console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);

// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.
let change = document.getElementsByClassName('subtitle');
console.log(change[0])
change[0].innerHTML = ('<em>on change<em>')



// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

//1er facon de faire
console.log(lesP);
for (let i = 0; i < lesP.length; i++) {
    lesP[i].style.textTransform = "uppercase";
}

//2eme facon de faire
// Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.
for (let p of lesP) {
    p.style.textTransform = "uppercase";
}

let pink = document.getElementsByClassName('pink');

pink[0].style.backgroundColor="pink";




//Selection via querySelector (selectionne le premier élément trouvé )

//jai la possibilité de pouvoir mettre des classe css directement dans les parenthes pour viser l'élément exemple .. .querySelector('success''p')

let div = document.querySelector('div');

div.style.border= "1px solid #000";
// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.


//Selection via queryselectorAll( (selectionne tout les éléments trouvés )
// sélectionne toutes les balises en ensemble et retourne un array d'éléments.

let query = document.querySelectorAll('.selectClass');

console.log(query); // on a 3 paragraphe qui ont la classe selectClass

for (let i = 0 ;i< query.length; i++) {

     console.log(query[i].innerText);
}

//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, p    lutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

let rajout = document.querySelector(" .bg-success p");
rajout.innerText ="Je suis là";

//CREATION D'UN NOUVEL ELEMENT 

let section = document.querySelector('section');

// Pour créer un éléments , nous utilsons la méthode createElement(), puis nous l'intégrons dans le noeud souhaité 
let nouveauParaFin = document.createElement('p');

nouveauParaFin.innerHTML ="<strong> Coucou , je suis son nouveau paragraphe à la fin de la section </strong>";
nouveauParaFin.style.color ="red";

section.append(nouveauParaFin);// append() -> insère du contenu à la fin de la section.//append() accepte tous les éléments (balise ou string ).

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerHTML = "<strong> Coucou , je suis son nouveau paragraphe au debut de la section </strong>";
nouveauParaDebut.style.color ="green";

section.prepend(nouveauParaDebut);
// prepend ()-> insère du contenu au début de la section


//DEPLACER UN ELEMENT

// Pour déplacer un élément il faut trois parametres
  /**
   * *-> le parent qui va accuillir l'élément
   * l'élément a déplacer 
   /-> l'élément qui vient après
   */

  let parent = document.querySelector('main');
  let jeBouge= document.querySelector('h4');
  let h2 = document.querySelector('h2');

  parent.insertBefore(jeBouge, h2)

  // Pour supprimer uélément il faut deux parametres :
  /*-> le parent
  /** l'élément à supprimer
  */

   let ul= document.querySelector('ul')
  //let li = document.getElementByTagName('li)[1];
   console.log(li);

  //Pour supprimer , on utilise .removeChild()
   ul.replaceChild(li);

  //CREER UN ATTRIBUT ET SA VALEUR

 //setAttribute() : methode pour ajouter un vouvel attribut ou changer la valeur d'un attribut existant pour un élément

 //et baliseA = document.querySelector('a');
 baliseA.setAttribute("monAttribut", "01_introduction.html"); 
 // Changer la valeur de l'attribut href

let lesA = document.querySelectorAll('a')

let valeurA = lesA[4].getAttribute('href');// ici je récupère la valeur de l'attribut href le getAttribute()
console.log(valeurA)

 // Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers  la documentation JS () qui s'affiche sur un nouvel onglet.
 // Ce lien sera de couleur blanche et non souligné.

 

