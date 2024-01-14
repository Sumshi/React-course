// To render a JSX expression means to make it appear on screen.


//  the code below renders hello world on the screen
import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

/*
const container = document.getElementById('app')
Uses the getElementById() method of document to get the 
Element object representing the HTML element 
with the passed in id (app). and stores it in container
*/



/*
const root = createRoot(container);
we use createRoot() from the react-dom/client library, which creates a
React root from container and stores it in root. root can be used to render a JSX expression.
This is the “where to place the content” part of React rendering.
*/

/*
root.render(<h1>Hello world</h1>)
uses the render() method of root to render the content passed in as an argument
*/



// In this example, we save a JSX expression as a variable named toDoList. We then pass toDoList as the argument of render():
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDoList);