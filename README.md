# gatsby-advanced-blog

> Gatsby starter for advanced blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/67f9dfd1-64b0-4280-ad92-1a69907af465/deploy-status)](https://app.netlify.com/sites/jakehayes/deploys)

## Install

```
$ git clone git@github.com:wonism/gatsby-advanced-blog.git <<PROJECT_NAME>>
# Recommend you to delete `.git`
$ cd <<PROJECT_NAME>> && rm -r .git
```

## Start with gatsby-cli

```
$ gatsby new <<PROJECT_NAME>> https://github.com/wonism/gatsby-advanced-blog
```

## Development

```
$ npm run dev
```

## Build

```
$ npm run build
```

## ⚠️ Caution

You **SHOULD** change some constants variable in `src/constants/index.js`.
They are related with site informations, social media and Disqus.

## Features

- Post
  - Pagination
  - Categories
  - Tags
  - Search
  - Put React Application into post
  - Put Tweet into post
  - Draft (set `hide` to `true`)
  - Copy codes with clicking button
- Portfolio
- Resume
- UI Theme

## When adding images

Open a shell one level above the folder the image was added to so that you can use [trimage](https://trimage.org), then use the following command

```bash
$ trimage -d ./DIRECTORY_NAME/
```

Then the images will be optimized
