export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "algolia": {
      "appId": "app-id",
      "apiKey": "api-key",
      "indexName": "index-name",
      "algoliaOptions": {}
    },
    "navbar": {
      "title": "Discite",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "start",
          "label": "Getting Started",
          "position": "left"
        },
        {
          "to": "docs/start",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/jwandrews99/Docs",
          "label": "GitHub",
          "position": "right"
        },
        {
          "search": true
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
              "to": "docs/style"
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
              "href": "https://github.com/jwandrews99"
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
          "sidebarPath": "/Users/jack/Documents/GitHub/Docs/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/jack/Documents/GitHub/Docs/src/css/custom.css"
        }
      }
    ]
  ]
};