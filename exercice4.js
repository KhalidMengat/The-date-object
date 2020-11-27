const main = document.querySelector('main');
document.querySelector('main').innerHTML = '';

const date = new Date();
console.log(date);

//tableau de variable//
let weekday = [ 'Sun', 'Mon', 'Tue', 
'Wed', 'Thu', 'Fri', 'Sat' ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];




// creation des differents elements//

const conteneur = document.createElement('div');
conteneur.className = 'container';
main.appendChild(conteneur);

const calendrier = document.createElement('div');
calendrier.className = 'calendar';
conteneur.appendChild(calendrier);

const jour = document.createElement('div');
jour.className = 'day';
jour.textContent = weekday[date.getDay()]; // jour de la semaine par rapprt  au tableau de valeur allant de 0 à 6 (0 c'est dimmanche)//
calendrier.appendChild(jour);

const dateJour = document.createElement('div');
dateJour.className = 'date';
dateJour.textContent = date.getDate(); //date en chiffre du mois//
calendrier.appendChild(dateJour);

const mois = document.createElement('div');
mois.className = 'month'
mois.textContent = month[date.getMonth()]; //mois ---> tableau de valeur (0 c'est janvier et 11 c'est decembre)//
calendrier.appendChild(mois);

const annee = document.createElement('div');
annee.className = 'year';
annee.textContent = date.getFullYear(); //donne l'annee actuelle (ex : 2020)
calendrier.appendChild(annee);

const heure = document.createElement('div');
heure.className = 'hour';
heure.textContent = date.toLocaleTimeString('fr-FR'); //affiche l'heure a l'instant présent ( heure sous forme française dans ce cas-là) //
conteneur.appendChild(heure);

