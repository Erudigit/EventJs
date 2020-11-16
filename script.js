// Fonctionnalité 1 & Fonctionnalité 1-bis :

var footer = document.querySelector('footer');
let e = 0;

footer.addEventListener('click', showCliqueConsole);

function showCliqueConsole() {
    console.log('clique');
    e = e + 1;
    console.log(`Clique numéro : ${e}`);
}

// Fonctionnalité 2 : 

let hamburger = document.querySelectorAll("#navbarHeader")[0]; 

let hamburgerButton = document.querySelector("button.navbar-toggler");

hamburgerButton.addEventListener('click', addClassButton);

function addClassButton() {
    hamburger.classList.toggle("collapse");
}

// Fonctionnalité 3 : 

let firstCard = document.querySelectorAll("div.album div.container div.row div.col-md-4")[0];

let textFirstCard = firstCard.querySelector("div.card-body p.card-text");

let editButtonFirstCard = firstCard.querySelector("div.card-body div.d-flex div.btn-group button.btn-outline-secondary");

editButtonFirstCard.addEventListener('click', editInRedTheText);

function editInRedTheText() {
    textFirstCard.style.color = "red";
}

// Fonctionnalité 4 : 

let secondCard = document.querySelectorAll("div.album div.container div.row div.col-md-4")[1];

let textSecondCard = secondCard.querySelector("div.card-body p.card-text");

let editButtonSecondCard = secondCard.querySelector("div.card-body div.d-flex div.btn-group button.btn-outline-secondary");

editButtonSecondCard.addEventListener('click', editInGreenTheText);

function editInGreenTheText() {
    if (textSecondCard.style.color == 'green') {
        textSecondCard.style.color = "red";
    }
    else if (textSecondCard.style.color == 'red') {
        textSecondCard.style.color = "green";
    }
    else {
        textSecondCard.style.color = "green";
    }
}

// Fonctionnalité 5 :

let linkHeader = document.querySelector("head link");

let navBar = document.querySelector("header div.navbar");

navBar.addEventListener('dblclick', disableCDN);

function disableCDN() {
    if (linkHeader.disabled == false) {
        linkHeader.disabled = true;
    }
    else {
        linkHeader.disabled = false;
    }
}

// Fonctionnalité 6 : 

for (let i=0; i < 6; i++) {

    let cardSelected = document.querySelectorAll("div.album div.container div.row div.col-md-4")[i].querySelector("div.card");

    let cardSelectedText = cardSelected.querySelector("p.card-text");

    let viewButton = cardSelected.querySelector("div.card-body div.d-flex div.btn-group button.btn-success");

    viewButton.addEventListener('mouseover', reduceTheCard);

    function reduceTheCard() {
        if (cardSelected.style.width == "20%") {
            cardSelected.style.width = "100%";
            cardSelectedText.style.display = "block";
        }
        else {
            cardSelected.style.width = "20%";
            cardSelectedText.style.display = "none";
        }
    }

}

// Fonctionnalité 7 :

let greyButton = document.querySelector("div.container p a.btn-secondary");

let noeudParent = document.querySelector("div.album div.container div.row");

greyButton.addEventListener('click', changeTheOrder);

function changeTheOrder() {
    let sp1 = noeudParent.querySelectorAll("div.col-md-4")[5];
    let sp2 = noeudParent.querySelectorAll("div.col-md-4")[0];
    noeudParent.insertBefore(sp1, sp2);
}

// sp1 = Dernière card
// sp2 = Première card

// Fonctionnalité 8 :

var colCards = document.getElementsByClassName("col-md-4");
var rightJumbotron = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-primary")[0];

rightJumbotron.removeAttribute("href");

rightJumbotron.addEventListener("click", previousCard );

function previousCard() {
    colCards[0].parentNode.insertBefore(colCards[0], colCards[colCards.length - 1].nextSibling)
}
