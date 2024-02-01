import React from 'react';

function Button(props) {
const {text = 'Default Text of Big Button'} = props;
    return (
      <button>{props.text}</button>
    );
}
// or this using defaultProps
// Button.defaultProps = {
//   text: 'Default Text of Big Button',
// }
export default Button;