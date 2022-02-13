import React, {useState} from "react";
import s from './Messages.module.css'
import Button from "./Button/Button";
import Dialogs from "./Dialogs/Dialogs";
import {chats, fullDate, messages} from "../../helper";




const Messages = () => {
    const [message, setMessage] = useState('');
    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const enterHandler = (e) => {
        if (e.key === "Enter") {
            messages.unshift({
                id: 1,
                nickname: 'Me',
                date: fullDate(),
                message: message,
                isMe: true,
                ava: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg'
            });
            setMessage('')
        }
    }


    return (
        <>
            <div className={s.container}>
                <div className={s.header_wrapper}>
                    <div className={s.buttons}>
                        <span>Conversations ({chats.length})</span>
                        <Button name={'New conversations'}/>
                    </div>
                    <div className={s.searchWrap}>
                        <div className={s.searchInput}>
                            <input type="text" placeholder="Search..."/>
                            <svg width="25" height="25" viewBox="0 0 512 512">
                                <path
                                    d="M307.581 316.32C252.788 368.583 165.87 367.849 111.978 314.12C57.3407 259.647 57.3407 171.328 111.978 116.855C166.615 62.3817 255.2 62.3817 309.838 116.855C360.362 167.227 364.165 246.541 321.248 301.271L441 420.662L426.619 435L307.581 316.32ZM295.457 131.192C248.762 84.6377 173.054 84.6377 126.359 131.192C79.6637 177.747 79.6637 253.227 126.359 299.782C173.054 346.337 248.762 346.337 295.457 299.782C342.152 253.227 342.152 177.747 295.457 131.192Z"/>
                            </svg>
                        </div>
                    </div>

                    <div className={s.chats_wrapper}>
                        {chats.map((chat, key) =>
                            <div key={key} className={chat.name === 'Team chat' ? s.chats_itemAct : s.chats_item}>
                                <img className={s.chats_item_avatar} alt="logo chats"
                                     src={chat.logo}/>
                                <div className={s.chats_description}>
                                    <div className={s.chats_titleWrap}>
                                        <div className={s.chats_title}>{chat.name}</div>
                                        <div className={s.chats_time}>{chat.name === 'Team chat' ? messages[0].date.substring(messages[0].date.length - 5) : ''}</div>
                                    </div>

                                    <div
                                        className={s.chat_name}> {chat.name === 'Team chat' ? messages[0].nickname + ': ' + messages[0].message : ''}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

               <Dialogs messageHandler={messageHandler} enterHandler={enterHandler} message={message} />
            </div>
        </>
    )
}

export default Messages;