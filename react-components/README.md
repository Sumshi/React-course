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
