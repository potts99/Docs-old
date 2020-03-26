export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Discite",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/style",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Popular Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Docusaurus Github",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": ""
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 The Docs Project, by Discite. Built with Docusaurus."
    }
  },
  "title": "Discites Docs",
  "tagline": "The home of documentation",
  "url": "https://discite-docs.netlify.com/",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "Discite",
  "projectName": "Discites Docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/jack/Documents/GitHub/Docs/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/jack/Documents/GitHub/Docs/src/css/custom.css"
        }
      }
    ]
  ]
};