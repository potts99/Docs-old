import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Start() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
        title={`${siteConfig.title}`}
        description="Get started page for Discite Docs">
        <header className={classnames('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Welcome to Discite Docs</h1>
                <p className="hero__subtitle">Choose a Language to get started on!</p>

            </div>
        </header>
        <main>

        </main>
        </Layout>
    );
}

export default Start;