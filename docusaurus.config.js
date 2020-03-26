module.exports = {
  title: 'Discites Docs',
  tagline: 'The home of documentation',
  url: 'https://discite-docs.netlify.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Discite', // Usually your GitHub org/user name.
  projectName: 'Discites Docs', // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: 'app-id',
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {}, // Optional, if provided by Algolia
        },
    navbar: {
      title: 'Discite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/style',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          search: true
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Popular Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/style',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Docusaurus Github',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: '',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Docs Project, by Discite. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jwandrews99/Docs/edit/master/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
