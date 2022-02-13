import React from "react";
import s from './Dialogs.module.css'
import {chats, users, messages} from "../../../helper";


const Dialogs = (props) => {

    return (
        <>
            <div className={s.messages_content}>
                <div className={s.messages_header}>
                    <div className={s.messages_chatWrap}>
                        <img className={s.messages_avatar} src={chats[1].logo} alt="logo chat"/>
                        <span className={s.chats_title}>{chats[1].name}</span>
                    </div>

                    <div className={s.userpic_wrap}>

                        {users.map((user, key) =>
                            <img className={s.avatar_userpic} src={user.ava} alt="ava" key={user.id}/>
                        )}
                        <div className={users.length > 4 ? s.avatar_userpic_amt : s.avatar_userpic_amtNone}>
                            {users.length - 4 + '+'}
                        </div>
                    </div>
                    <div className={s.btn}>
                        <svg viewBox="0 0 256 256">
                            <path
                                d="M144,192a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,144,192ZM128,80a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,128,80Zm0,32a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,112Z"/>
                        </svg>
                    </div>
                </div>
                <div className={s.messages_container}>
                    {messages.map((message, key) =>
                        <div className={`${s.messages_wrapper} ${message.isMe ? `${s.reverse}` : ''}`} key={key}>
                            <img className={s.messages_avatar} src={message.ava} alt="ava"/>
                            <div className={s.messages}>
                                <div className={s.messages_title}>
                                    <div><strong>{message.nickname}</strong></div>
                                    <div>{message.date.toString()}</div>
                                </div>
                                <div className={s.messages_text}>{message.message}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={s.input_wrapper}>
                    <input placeholder="Type Here..." className={s.input} onChange={props.messageHandler}
                           value={props.message}
                           onKeyDown={props.enterHandler}/>
                </div>
            </div>
        </>
    )
}

export default Dialogs;