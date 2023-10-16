import React from 'react';
import { Link } from 'react-router-dom';
import styles from './base.module.css'

function Nav(){
    return (
        <nav>
            <Link to='/ChatApp'>Chat App</Link>
        </nav>
    )
}

function Sidebar(){
    return (
        <div id={styles['sidebar']}>
            <h1 id='heading'>ReactExpress</h1>
            <Nav />
        </div>
    )
}

export default Sidebar;