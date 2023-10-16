import React from 'react';
import styles from './ChatApp.module.scss';
import MessageContainer from './MessageContainer';
import InputSection from './InputSection';


function ChatAppComponent(){
    return (
        <div id={styles['main-container']}>
            <h1 id={styles['greeting']}>Welcome to the Chat!</h1>
            <MessageContainer />
            <InputSection/>
        </div>
    )
}

export default ChatAppComponent;