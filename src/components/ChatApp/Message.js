import React from 'react';
import styles from './ChatApp.module.scss';

function Message({author, text, date}){
    return (
        <div className={styles['message']}>
            <div className={styles['header']}>
                <span className={styles['author']}>{author}</span>
                <span className={styles['date']}>{date}</span>
            </div>
            <p className={styles['text']}>{text}</p>
        </div>
    )
}

export default Message;