import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);

/*
 output is:
 Rowe
 Prevost
 Gare
*/

const otherPeople = ['John', 'Jane', 'Doe'];

const otherPeopleList = otherPeople.map((person, i) => (
  <li>{person}</li>
));

root.render(<ul>{otherPeopleList}</ul>);
/* output is :
john
jane
doe
*/
