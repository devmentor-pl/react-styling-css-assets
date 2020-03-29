// ./src/components/Row.js
import React from 'react';
import classNames from 'classnames';

import './../css/Row.css';

const Row = props => {
    const { type, space } = props;

    const className = classNames(
        'Row', 
        {
            [`Row--${type}`]: type,
            [`Row--space-${space}`]: space,
        }
    );

    return (
        <div className={ className }>
            React: Styling, classnames
        </div>
    );
}

export default Row;