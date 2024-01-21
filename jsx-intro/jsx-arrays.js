// map arrays in jsx

/* 
If you want to create a list of JSX elements, then using .map() is often the
most efficient way.
*/

const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>

// exmaple 2
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];

<ul>{liArray}</ul>