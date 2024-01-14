// example 1
const title = <h1 id='title'>Introduction to React.js: Part I</h1>;

// example 2
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px'></img>;

// example 3 nested jsx
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

// if it takes more than one line, then you must wrap the multi-line JSX expression in parentheses.
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)


// JSX Outer Elements, JSX expression must have exactly one outermost element.

// here elements are enlcosed in a div
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

const blog = (
  <div>
  <img src="pics/192940u73.jpg" />
  <h1>
    Welcome to Dan's Blog!
  </h1>
  <article>
    Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
  </article>
  </div>
);