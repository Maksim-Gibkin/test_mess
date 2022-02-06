import React, {useState} from "react";
import s from "styled-components";
import Button from "./Button/Button";

const Container = s.div`
  display:flex;
`

const MessagesContainer = s.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Input = s.input`
  width: 500px;
  height: 33px;
  border: 1px solid #6c6161;
  
`

const MessageItem = s.div`
  width: 600px;
  background: #f3f3f3;
  padding: 16px;
`


const chats = [
    {name: 'Conversation', logo: ''},
    {name: 'Teem chat', logo: ''},
    {name: 'Meeting chat', logo: ''},
]

const messages = [
    {nickname: 'Sam', date: '', message: 'Hello', isMe: false},
    {nickname: 'Me', date: '', message: 'Hi!', isMe: true},
    {nickname: 'Sam', date: '', message: '228', isMe: false}
]

const Messages = () => {
    const [message, setMessage] = useState('');
    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const enterHandler = (e) => {
        if (e.key === "Enter") {
            messages.push({nickname: 'Me', date: '', message: message, isMe: true});
            setMessage('')
        }
    }

    return (
        <Container>

            <div>
                <div>
                    <Button chats={chats.length}/>
                </div>

                <div>
                    {chats.map((chat, key) =>
                        <div key={key}>{chat.name}</div>
                    )}
                </div>
            </div>
            <MessagesContainer>

                {messages.map((message, key) =>
                    <MessageItem key={key}>
                        {message.nickname}: {message.message}
                    </MessageItem>
                )}

                <Input onChange={messageHandler} value={message} onKeyDown={enterHandler}></Input>
            </MessagesContainer>
        </Container>
    )
}

export default Messages;