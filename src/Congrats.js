import React from 'react'

/**
 * Functional react component for congratulatory message
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
function Congrats({success}) {
    return (
        <div data-test="component-congrats" />
    )
}

export default Congrats
