import React from 'react';
import styles from '../../styles/components/StaffCard.module.scss'

export default function StaffCard({name, avatar, github})
{
    return (
        <div className ={styles.card_container}>
            <div className = {styles.avatar_container}>
                <img src = {avatar} className = {styles.avatar}/> 
            </div>

            <span className = {styles.name}>{name}</span>
            <div className = {styles.github_container}>
                <img src = "https://raw.githubusercontent.com/simple-icons/simple-icons/23f0c1a466891f1a7f4790391f44b6fabe37f528/icons/github.svg"/>
                <a href={github} className = {styles.github_link}>Github</a>
            </div>
        </div>
    )
}