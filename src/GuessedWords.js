import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {useCounter} from '@customHook';

const GuessedWords = () => {
    const [] = useCounter();
    return (
        <div data-test="component-input">
            <input
                value={counter}
                type="text"
                data-test="input-box"
                onChange={(e) => setCounter(counter + e.target.value)}
            />
        </div>
    );
};

GuessedWords.propTypes = {

};

export default GuessedWords;