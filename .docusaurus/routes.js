
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/getting-started',
  component: ComponentCreator('/getting-started'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/gulp',
  component: ComponentCreator('/docs/gulp'),
  exact: true,
  
},
{
  path: '/docs/html-forms',
  component: ComponentCreator('/docs/html-forms'),
  exact: true,
  
},
{
  path: '/docs/html-fund',
  component: ComponentCreator('/docs/html-fund'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/start',
  component: ComponentCreator('/docs/start'),
  exact: true,
  
},
{
  path: '/docs/style',
  component: ComponentCreator('/docs/style'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
