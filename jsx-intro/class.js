// we cannot use class in jsx since class is a reserved keyword in javascript instead use className
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
const myDiv = <div className="big">I AM A BIG DIV</div>
root.render(myDiv);