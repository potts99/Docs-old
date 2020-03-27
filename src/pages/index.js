import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Why we chose Docusaurus</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus has been designed for quick and easy use, this was one of the most
        appealing reasons why we chose this. <br></br>
        Having the ability to easily create documents in Markdown was an amazing feature to have.
      </>
    ),
  },
  {
    title: <>Our goal</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       The goal is to create a site that is easy to maintain and update. Whilst also providing functionality to multiple devices.

      </>
    ),
  },
  {
    title: <>MDX</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        All of our docs are created in Markdown, this makes creating or editing incredibily easy. <br></br>
        Using MDX allows for Markdown to be seen in the browser. Making for easy reading for any user.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
