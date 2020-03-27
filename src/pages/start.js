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
<<<<<<< HEAD
        
=======
            <div className="container">
            <div class="row">
                <div class="col col--6" style={{padding: "1em",}}>
                    <h3 style={{textAlign: "center"}}>Why this?</h3>
                    <p>The following sections give you links to four different sections.
                        <br></br>
                        Each section are a collection of markdown documents that have snippets, explaniations and sometimes example code on a particular method or function.
                        <br></br>
                        This has been created as a personal tool, but one that can still be used by anyone. 
                        <br></br>
                        The aim is not to teach people new to code, but to help jog memories and help.
                    </p>
                </div>
                <div class="col col--6" style={{padding: "1em"}}>
                    <h3 style={{textAlign: "center"}}>Who is this meant for? 👨🏻‍💻</h3>
                    <p>The are several people that might find this useful!</p>
                    <ul>
                        <li>Beginers working on there first project.</li>
                        <li>People returning to a Language after using something else.</li>
                        <li>Or even perhaps an expieranced dev who wants to check something out.</li>
                    </ul>
                    <h4>The list is endless & the requirments for entry is 0</h4>
                </div>
            </div>
            <div class="row" style={{padding: "1.5em", margin: "10px"}}>
                <div class="col">
                    <div class="card-demo">
                    <div class="card">
                        <div class="card__body">
                        <h4> HTML Snippets</h4>
                        <small>
                        The following section are notes and code snippets that can be used when working with HTML
                        </small>
                        </div>
                        <div class="card__footer">
                        <Link className="button button--primary button--block" to={useBaseUrl('docs/html/html-fund')}>Take me there!</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="card-demo">
                    <div class="card">
                        <div class="card__body">
                        <h4>JavaScript Snippets</h4>
                        <small>
                        The following section are notes and code snippets that can be used when working with Js
                        </small>
                        </div>
                        <div class="card__footer">
                        <Link className="button button--primary button--block" to={useBaseUrl('')}>Take me there!</Link>
                        </div>
                    </div>
                </div>               
                </div>
                <div class="col">
                <div class="card">
                        <div class="card__body">
                        <h4>Css Snippets</h4>
                        <small>
                        The following section are notes and code snippets that can be used when working with Css
                        </small>
                        </div>
                        <div class="card__footer">
                        <Link className="button button--primary button--block" to={useBaseUrl('')}>Take me there!</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class="card">
                        <div class="card__body">
                        <h4>Tools</h4>
                        <small>
                        The following section are notes and code snippets that can be used when working with tools.
                        </small>
                        </div>
                        <div class="card__footer">
                        <Link className="button button--primary button--block" to={useBaseUrl('docs/gulp/gulp')}>Take me there!</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
>>>>>>> 2f5068014d6ea93e458b52ae038905539d7df336
        </main>
        </Layout>
    );
}

export default Start;