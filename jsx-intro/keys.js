/*
React uses keys  internally to keep track of lists. If you don’t use keys when you’re supposed to,
React might accidentally scramble your list items into the wrong order.
*/

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

/* example 2
Use the map function to iterate over the array and create a new array of JSX elements
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li key={'person_'+ i}>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);