import React from 'react';
import Navbar from './Navbar'
//@ts-ignore
import styles from '../styles/Layout.module.scss';

export default function Layout({children})
{
    return (
        <>
            <Navbar/>
            <section className = {styles.children_container}>
                {children}
            </section>
        </>
    )
}