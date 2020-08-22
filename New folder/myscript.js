//how to add elements to html from JavaScript

let p1 = document.createElement('p');//first: create the element
//second: do something with the element
p1.textContent = 'this p1 was created with js ';

//third:with appendChild add the element to the location of your choice
document.querySelector('body').appendChild(p1);

//creating a new paragraph
let p2 = document.createElement('p');
p2.textContent = 'this p2 was created with js';
//the appendChild adds always to the last element (children)
document.querySelector('body').appendChild(p2);

p1.setAttribute('id', 'para1');//we just gave to p1 an id of para1
p2.setAttribute('id', 'para2'); //gave to p2 an id of para2

//we want to add header h2 right after p1
let heading2 = document.createElement('h2');
heading2.textContent = `this is a new heading document.querySelector('#para1)`;
document.querySelector('#para1').appendChild(heading2);

//we want to add an h1 right before p1
let heading1 = document.createElement('h1');
heading1.textContent = 'this is my h1';
document.querySelector('#para1').before(heading1);

//we want to add an h3 right after p2
let heading3 = document.createElement('h3');
heading3.textContent = 'this ia a new heading 3 which i place after p2';
document.querySelector('#para2').after(heading3);