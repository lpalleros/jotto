import React from 'react';
import { shallow } from 'Enzyme';
import { findByAttr, checkProps } from './testUtils';
import GuessedWords from './GuessedWords';

import {useCounter} from './customHook';

const defaultProps = {
    guessedWords: [
        { gussedWord:'train', letterMatchCount: 3 }
    ]
};

const mockSetState = jest.fn();


jest.mock('react', () => ({
    useState: initial => [initial, mockSetState],
}));


// it('test mockup test', () => {
//     const [_,setCounter] = useCounter(2);
//     console.log(_);
//     setCounter();
//     expect(mockSetState).toHaveBeenCalledWith(3);
//     console.log(_);
//     setCounter();
//     expect(mockSetState).toHaveBeenCalledWith(3);

// });

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps} />);
};

test('setup', () => {
    checkProps(GuessedWords,defaultProps)
}); 


test('if there are no words guessed', () => {

});

