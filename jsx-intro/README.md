<h3>What is JSX in React</h3>
<P>JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.</P>
<p>JSX is not valid JavaScript. Web browsers can’t read it</p>

```
Here are some of jsx elements:
<h1>Hello world</h1>
```

<p>This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.</p>

```
several jsx elements:
const navBar = <nav>I am a nav bar</nav>;
```

<p>A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:</p>

<p>In JSX, you can’t use the word class! You have to use className instead:
This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
</p>

<p>it is must to include a / in self closing tags in jsx eg img unlike html where it is not must</p>

<p>Any code in between the tags of a JSX element will be read as JSX, not as regular 
JavaScript! JSX doesn’t add numbers—it reads them as text, just like HTML.
to treat them like js put curly braces inside the code
</p>
