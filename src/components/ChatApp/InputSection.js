import React from 'react';
import styles from './ChatApp.module.scss';
const config = require('../../config.js');

function InputSection(){
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(config.SERVERS.ChatApp);

        fetch(`${config.SERVERS.ChatApp}/chat/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: event.target.elements.message.value
            })
        })
        .then((res) => {})
        .catch((err) => {})

        event.target.elements.message.value = "";
    }

    return (
        <form id={styles['input-form']} onSubmit={handleSubmit}>
            <input type="text" name="message"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default InputSection;