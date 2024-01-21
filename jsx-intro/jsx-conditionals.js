// we cannot inject if statements onto jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

root.render(message);


// example 2
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === 'heads') {
  img = <img src={pics.kitty} />
} else {
  img = <img src={pics.doggy} />
}
root.render(img);


//  ternary operator in jsx
/*
you write x ? y : z, where x, y, and z are all JavaScript expressions. When your code is executed, x is evaluated as either “truthy” or “falsy”.
If x is truthy, then the entire ternary operator returns y. If x is falsy, then the entire ternary operator returns z.
*/

// example of how to use ternary operator
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);


// using && operator in react
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

/*
above { !baby && <li>Pizza</li> }: This is a JavaScript expression within curly braces {}. It checks if the variable baby is falsy (not true) and, if so, renders another list item with the text "Pizza". If baby is true, this part is skipped.

{ age > 15 && <li>Brussels Sprouts</li> }: Similar to the previous line, this checks if the variable age is greater than 15. If true, it renders a list item with the text "Brussels Sprouts".

{ age > 20 && <li>Oysters</li> }: This checks if age is greater than 20, and if true, it renders a list item with the text "Oysters".
*/