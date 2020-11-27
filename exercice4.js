const main = document.createElement('main')
document.querySelector('main'.innerHTML = '');

const cont = document.createElement('div');
cont.className = 'container';
main.appendChild(cont);

const calendrier = document.createElement('div');
calendrier.className = 'calendar'
cont.appendChild(calendrier);

const jour = document.createElement('div');
jour.className = 'day'
// jour.textContent = 'wed'
cont.appendChild(jour);

const date = document.createElement('div');
date.className = 'Date'
cont.appendChild(date);

const mois = document.createElement('div');
mois.className = 'month'
cont.appendChild(mois);

const annee = document.createElement('div');
annee.className = 'year'
cont.appendChild(annee);
