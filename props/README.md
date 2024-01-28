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