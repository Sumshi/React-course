<p>Your function components can include event handlers. With event handlers, we can run some code in response to interactions with the interface, such as clicking.</p>

```
function MyComponent(){
  function handleHover() {
    alert('Stop it.  Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}
```

<p>The logic for what should happen when the <div> is hovered on is contained inside the handleHover() function. The function is then passed to the <div> element.</p>
<p>Event handler functions are defined inside the function component and, by convention, start with the word “handle” followed by the type of event it is handling</p>
<p>The handleHover() function is passed without the parentheses we would typically see when calling a function. This is because passing it as handleHover indicates it should only be called once the event has happened. Passing it as handleHover() would trigger the function immediately, so be careful!</p>
