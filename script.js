// FONCTIONALITE 1 & 1bis

var footer = document.querySelector("footer"); // ici le querySelector au lieu d'un getElement pour éviter le pseudo array en réponse
var clickNbr = 0;

var clickCount = function () {
	clickNbr += 1 ;
	console.log(`Vous avez cliqué ${clickNbr} fois !!!`)
};

footer.addEventListener("click", clickCount); // avec getElement il faut écrire ici footer[0].add...

// FONCTIONALITE 2

var toggler = document.getElementsByClassName('navbar-toggler');

var onClick = function () {
	document.getElementById("navbarHeader").classList.toggle('collapse');
};
toggler[0].addEventListener("click", onClick);

// FONCTIONALITE 3

var btnEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary");

var click = function() {
	document.getElementsByClassName('card-text')[0].style.color = 'red';
};

btnEdit[0].addEventListener("click", click);

// FONCTIONALITE 4

var colorText = document.getElementsByClassName('card-text')[1]

var click2 = function() {	
	colorText.style.color === 'green' ? colorText.style.color = 'black' : colorText.style.color = 'green'; // On connait ce type de boucle sur ruby																		
};

btnEdit[1].addEventListener("click", click2);

// FONCTIONALITE 5

var navbar = document.getElementsByClassName("navbar");
var cdn = document.querySelector("link")

var noBootstrap = function () {
	cdn.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" ? 
			cdn .href = " " : 
			cdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" ;
};

navbar[0].addEventListener("dblclick", noBootstrap);

// FONCTIONALITE 6

var card = document.getElementsByClassName("card");
var cardText = document.getElementsByClassName("card-text");
var cardImg = document.getElementsByClassName("card-img-top");

for (let i = 0; i < card.length; i++) {
	card[i].addEventListener("mouseover", function () {
		cardText[i].classList.toggle('collapse') && cardImg[i].style.width === '348px' ? cardImg[i].style.width = '20%' : cardImg[i].style.width = '348px' ;	
});
}
