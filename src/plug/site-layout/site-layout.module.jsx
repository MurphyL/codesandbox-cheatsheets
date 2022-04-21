import React, { Fragment } from 'react';

import { Link, Outlet } from "react-router-dom";

import classNames from 'classnames';

import styles from './site-layout.module.css';

export default function SiteLayout() {
    return (
        <Fragment>
            <header className={styles.root}>
                <figure className={classNames(styles.aside, styles.logo)}>
                    <span>{process.env.REACT_APP_TITLE}</span>
                </figure>
                <nav className={styles.navi}>
                    <Link to="/html5/tag/">Home</Link>
                    <Link to="html5/tag/meter.html">Previous</Link>
                    <Link to="html5/tag/noscript.html">Next</Link>
                </nav>
            </header>
            <main className={styles.root}>
                <aside className={classNames(styles.aside)}></aside>
                <section>
                    <Outlet />
                </section>
            </main>
        </Fragment>
    );
}