import React, { useState, useEffect } from 'react';
import styles from './ChatApp.module.scss';
import Message from './Message';
const config = require('../../config.js');

class MessageObj {
    constructor({text, author="User"}) {
        this.text = text;
        this.author = author;

        const d = new Date();
        this.date = `${d.toLocaleDateString()} ${d.toTimeString()}`;
    }
}





function MessageContainer(){
    const [messages, setMessages] = useState([]);
    // const [messageIdx, setMessageIdx] = useState(0);

    useEffect(() => {
        const eventSource = new EventSource(`${config.SERVERS.ChatApp}/chat/events`);
    
        eventSource.addEventListener('new_message', (event) => {
            const data = JSON.parse(event.data);
            const obj = new MessageObj("Dummy");
            obj.author = data.content.author;
            obj.text = data.content.text;

            setMessages((existing) => [...existing, obj])
            
        });
    
        return () => {
          eventSource.close(); // Close the SSE connection when the component is unmounted
        };
    }, []);


    return (
        <div id={styles['message-container']}>
            <ul>
            {
                messages.map((msg, index) => {
                    return <Message key={index} author={msg.author} text={msg.text} date={msg.date}/>
                })
            }
            </ul>
        </div>
    )
}
export default MessageContainer;