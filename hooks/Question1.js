/*
1) Import the default export from the 'react' library and call it React. We also will be using the State Hook, so go ahead and import the named export useState from the 'react' library as well.
2) Use const to declare and assign the return values from calling useState() to color and setColor.
3) In the JSX, use onClick event listeners to call the setColor() state setter function with the appropriate color when the user clicks on each of these buttons.
*/

// import the default export and the named export `useState` from the 'react' library
import React, { useState } from "react";

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() => setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}

// everytime user clicks on the button, the color will change to the color of the button clicked