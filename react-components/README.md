React applications are made of components.
What’s a component?
A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML and re-render it when some data changes.

```example
in file index.js we have:
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);

```

```in file app.js we have :
import React from 'react';

function App() {
  return <h1>Hello again, World!</h1>;
}

export default App;

```

The output for above will be Hello again, World!

A React application typically has two core files:
App.js and index.js. App.js file is the top level of your application, and index.js is the entry point.
components are defined inside app.js

To render our component to the browser, we must rely on the .createRoot() and .render() methods from the react-dom library.

<ul>
  <li>
    <p>React applications are made up of components.</p>
  </li>
  <li>
    <p>Components are responsible for rendering pieces of the user interface.</p>
  </li>
  <li>
    <p>To create components and render them, react and reactDOM must be imported.</p>
  </li>
  <li>
    <p>React components can be defined with Javascript functions to make function components.</p>
  </li>
  <li>
    <p>Function component names must start with a capitalized letter, and Pascal case is the adopted naming convention.</p>
  </li>
  <li>
    <p>Function components must return some React elements in JSX syntax.</p>
  </li>
  <li>
    <p>React components can be exported and imported from file to file.</p>
  </li>
  <li>
    <p>A React component can be used by calling the component name in an HTML-like self-closing tag syntax.</p>
  </li>
  <li>
    <p>Rendering a React component requires using .createRoot() to specify a root container and calling the .render() method on it.</p>
  </li>
</ul>
