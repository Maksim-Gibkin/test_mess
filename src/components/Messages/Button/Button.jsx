import React from 'react';

function Button(props) {
    console.log(props, 'props')
    return (
        <div>
            <button>Conversations ({props.chats})</button>
            <button>New conversations</button>
        </div>

    );
}

export default Button;