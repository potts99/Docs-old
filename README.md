# Notes collection of anything useful for future reference

[![Netlify Status](https://api.netlify.com/api/v1/badges/88fc76f8-3af3-4343-ab4e-1deea9e51a62/deploy-status)](https://app.netlify.com/sites/discite-docs/deploys)

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
