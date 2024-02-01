/* Giving Default Values to props */

// The first method is adding a defaultProps static property to the component:
function Example(props) {
  return <h1>{props.text}</h1>
}

Example.defaultProps = {
  text: 'This is default text',// this text will be displayed
};

// You can also specify the default value directly in the function definition:

function Example({text='This is default text'}) {
   return <h1>{text}</h1>
}

// Lastly, you can also set the default value in the function body:

function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}
