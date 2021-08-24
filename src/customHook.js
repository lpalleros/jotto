import React, {useState} from 'react';




export const useCounter = (initial = 0) => {
    const [counter,setCounter] = useState(initial);
    return [counter, () => setCounter(counter + 1)]
};
