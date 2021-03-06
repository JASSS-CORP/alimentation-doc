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
                                Jasss, Corp.
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
                                <a href="https://github.com/JASSS-CORP">Github</a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1iFbxSoUVxaKIWKc2NYU4IA1kUAv-m_ZK/view?usp=sharing">Documentation</a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/124KkSmFfBRV1IDOjNGiARey3lDr-DzLG0s3DMw0fqQ8/edit?usp=sharing">Report</a>
                            </li>
                        </ul>
                    </div>



                </div>
            </nav>
        </header>
    )
}