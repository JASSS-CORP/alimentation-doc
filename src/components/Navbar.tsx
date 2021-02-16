import React from 'react';
//@ts-ignore
import styles from '../styles/Navbar.module.scss'
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.nav_elements}>
                    {/*left elements */}
                    <div className={styles.left_elements}>
                        <h1 className={styles.header}>
                            <Link to="/">
                                Alimentation
                            </Link>
                        </h1>
                    </div>



                    {/*right elements */}
                    {/* not logged in */}

                    <div className={styles.right_elements}>
                        <ul>
                            <li>
                                <Link to='/sprints'>
                                    Sprints
                                </Link>
                            </li>
                            <li>
                                <Link to='/daily'>
                                    Daily
                                </Link>
                            </li>
                            <li>
                                <Link to='/github'>
                                    Github
                                </Link>
                            </li>
                            <li>
                                <Link to='/docs'>
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to='/report'>
                                    Report
                                </Link>
                            </li>
                        </ul>
                    </div>



                </div>
            </nav>
        </header>
    )
}