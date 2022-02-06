import React from 'react';
import s from './Button.module.css'

function Button(props) {
    return (
        <div className={s.container}>
            <button>{props.name}</button>
        </div>

    );
}

export default Button;