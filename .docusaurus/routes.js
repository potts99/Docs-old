
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
  path: '/start',
  component: ComponentCreator('/start'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/back-end/ExpressJS/express-routers',
  component: ComponentCreator('/docs/back-end/ExpressJS/express-routers'),
  exact: true,
  
},
{
  path: '/docs/back-end/ExpressJS/express-routes',
  component: ComponentCreator('/docs/back-end/ExpressJS/express-routes'),
  exact: true,
  
},
{
  path: '/docs/css/adva/box-method',
  component: ComponentCreator('/docs/css/adva/box-method'),
  exact: true,
  
},
{
  path: '/docs/css/adva/colors',
  component: ComponentCreator('/docs/css/adva/colors'),
  exact: true,
  
},
{
  path: '/docs/css/adva/display-and-positioning',
  component: ComponentCreator('/docs/css/adva/display-and-positioning'),
  exact: true,
  
},
{
  path: '/docs/css/adva/flexbox',
  component: ComponentCreator('/docs/css/adva/flexbox'),
  exact: true,
  
},
{
  path: '/docs/css/adva/media-queries',
  component: ComponentCreator('/docs/css/adva/media-queries'),
  exact: true,
  
},
{
  path: '/docs/css/adva/typography',
  component: ComponentCreator('/docs/css/adva/typography'),
  exact: true,
  
},
{
  path: '/docs/css/fund/syntax-and-tips',
  component: ComponentCreator('/docs/css/fund/syntax-and-tips'),
  exact: true,
  
},
{
  path: '/docs/gulp/gulp',
  component: ComponentCreator('/docs/gulp/gulp'),
  exact: true,
  
},
{
  path: '/docs/html/html-forms',
  component: ComponentCreator('/docs/html/html-forms'),
  exact: true,
  
},
{
  path: '/docs/html/html-fund',
  component: ComponentCreator('/docs/html/html-fund'),
  exact: true,
  
},
{
  path: '/docs/html/html-tables',
  component: ComponentCreator('/docs/html/html-tables'),
  exact: true,
  
},
{
  path: '/docs/js/Bash/Bash Scripting',
  component: ComponentCreator('/docs/js/Bash/Bash Scripting'),
  exact: true,
  
},
{
  path: '/docs/js/JS',
  component: ComponentCreator('/docs/js/JS'),
  exact: true,
  
},
{
  path: '/docs/js/adva/async-await',
  component: ComponentCreator('/docs/js/adva/async-await'),
  exact: true,
  
},
{
  path: '/docs/js/adva/callbacks',
  component: ComponentCreator('/docs/js/adva/callbacks'),
  exact: true,
  
},
{
  path: '/docs/js/adva/class',
  component: ComponentCreator('/docs/js/adva/class'),
  exact: true,
  
},
{
  path: '/docs/js/adva/dom-events',
  component: ComponentCreator('/docs/js/adva/dom-events'),
  exact: true,
  
},
{
  path: '/docs/js/adva/handling-errors',
  component: ComponentCreator('/docs/js/adva/handling-errors'),
  exact: true,
  
},
{
  path: '/docs/js/adva/javascript',
  component: ComponentCreator('/docs/js/adva/javascript'),
  exact: true,
  
},
{
  path: '/docs/js/adva/modules',
  component: ComponentCreator('/docs/js/adva/modules'),
  exact: true,
  
},
{
  path: '/docs/js/adva/promises',
  component: ComponentCreator('/docs/js/adva/promises'),
  exact: true,
  
},
{
  path: '/docs/js/adva/script-and-dom',
  component: ComponentCreator('/docs/js/adva/script-and-dom'),
  exact: true,
  
},
{
  path: '/docs/js/fund/conditionals',
  component: ComponentCreator('/docs/js/fund/conditionals'),
  exact: true,
  
},
{
  path: '/docs/js/fund/functions',
  component: ComponentCreator('/docs/js/fund/functions'),
  exact: true,
  
},
{
  path: '/docs/js/fund/getting-started',
  component: ComponentCreator('/docs/js/fund/getting-started'),
  exact: true,
  
},
{
  path: '/docs/js/fund/variables',
  component: ComponentCreator('/docs/js/fund/variables'),
  exact: true,
  
},
{
  path: '/docs/js/tech/arrays',
  component: ComponentCreator('/docs/js/tech/arrays'),
  exact: true,
  
},
{
  path: '/docs/js/tech/iterators',
  component: ComponentCreator('/docs/js/tech/iterators'),
  exact: true,
  
},
{
  path: '/docs/js/tech/loops',
  component: ComponentCreator('/docs/js/tech/loops'),
  exact: true,
  
},
{
  path: '/docs/js/tech/objects',
  component: ComponentCreator('/docs/js/tech/objects'),
  exact: true,
  
},
{
  path: '/docs/js/tech/scope',
  component: ComponentCreator('/docs/js/tech/scope'),
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
