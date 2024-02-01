Props can be used to customize the output of each component depending on the information that is passed in.

<p>A component’s props is an object. It holds information about that component.</p>
<p>Props serve the same purpose for components as arguments do for functions.</p>
<p>To access a component’s props object, you can reference the props object and the dot notation for its properties. 
example: props.name, This would retrieve the name property from the props object.
</p>
<p>props is the information that gets passed from one component to another.</P>

```
example:
<Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />

wrap the values that are not string in a curly braces
```

<p>To make sure that a function component can use the props object, define your function component with props as the parameter:
```
function Button(props) {
  return <button>{props.displayText}</button>;
}
</p>
<p>In the example, props is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (object.propertyName).</p>

<p>Alternatively, since props is an object, you can also use destructuring syntax like so:

```
function Button({displayText}) {
  return <button>{displayText}</button>;
}

```

</p>

<p>Props in React travel in a one-way direction, from the top to bottom, parent to child.</p>

<h3>Props used in decision making</h3>
<p>You can do more with props than just display them. You can also use props to make decisions
```
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}
```
</p>

<p>
In the next exercise, we will pass an event handler function as a prop. However, we have to define an event handler before we can pass one anywhere. In this exercise, we will define an event handler function.

```
import React from 'react';

function Example() {
  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  return (
      <h1 onClick={handleEvent}>
        Hello world
      </h1>
    );
}
```

</p>

<h3>Naming events </h3>
<p>
Here’s how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was “click”. If you are listening for a “click” event, then you name your event handler handleClick. If you are listening for a “hover” event, then you name your event handler handleHover:

```
function myClass() {
  function handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
```

<p>Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick. If you are listening for a “hover” event, then you name your prop onHover:</p>
```
function myClass(){
  function handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }`
   return <Child onHover={handleHover} />;
}
```
Names like onClick only create event listeners if they’re used on HTML-like JSX elements. Otherwise, they’re just ordinary prop names.
</p>

<p>Every component’s props object has a property named children.
props.children will return everything in between a component’s opening and closing JSX tags.
</p>
