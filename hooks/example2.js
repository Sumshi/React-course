/*
Like how you used the State Hook to manage a variable with string values, we can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects!
Have a look at the following function component. What data type does this state variable hold?
*/
import React, { useState } from 'react';

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}

/*
The ToggleLoading() function component above uses the simplest of all data types, a boolean. Booleans are frequently used in React applications to represent whether data has loaded or not. In the example above, we see that true and false values are passed to the state setter, setIsLoading().

This code works just fine as is, but what if we want our component to start off with isLoading set to true?
To initialize our state with any value we want, we simply pass the initial value as an argument to the useState() function call.
*/

const [isLoading, setIsLoading] = useState(true);