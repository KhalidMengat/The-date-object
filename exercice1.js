const main = document.createElement('main')


let Brussel = new Date()

let Anchora = new Date(new Date().getTime() - (9 * 60 * 60 * 1000))

let Reykjavic = new Date(new Date().getTime() - (1 * 60 * 60 * 1000))

let Saint_Petersbourg = new Date(new Date().getTime() + (3 * 60 * 60 * 1000))





console.log('Anchora : ' + Anchora.toLocaleTimeString('en-Us') + ' Brussel : ' + Brussel.toLocaleTimeString('en-Us')); 

console.log('Reukjavic : ' + Reykjavic.toLocaleTimeString('en-Us') + ' Brussel : ' + Brussel.toLocaleTimeString('en-Us'));

console.log('Saint Petersbourg' + Saint_Petersbourg.toLocaleTimeString('en-Us') + ' Brussel : ' + Brussel.toLocaleTimeString('en-Us'));
