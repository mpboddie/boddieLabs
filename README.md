<p align="center">
  <a style="padding-right: 16px;" href="https://tinacms.org">
    <img src="/static/Tina_Llama.svg" width="50" height="36">
  </a>
  <a href="https://www.gatsbyjs.org/">
    <img src="/static/gatsby_logo.svg" width="50" height="32">
  </a>
</p>
<h1 align="center">
  Brevifolia
</h1>

## About

[![Netlify Status](https://api.netlify.com/api/v1/badges/314f6fb1-b4a6-484a-ad3d-c26663a63bca/deploy-status)](https://app.netlify.com/sites/brevifolia-gatsby-forestry/deploys)

Brevifolia is minimalist blog starter to get you going using [TinaCMS](https://tinacms.org) with [Gatsby](https://www.gatsbyjs.org/). Check out the [Forestry](https://forestry.io) version of the demo [here](https://brevifolia-gatsby-forestry.netlify.com/). A live version of the Tina demo in the cloud is coming soooon 😊

This blog is statically generated by Gatsby, a rendered combination of react components and markdown files. It is preconfigured to work with TinaCMS as a way to manage your content. Tina makes changes by editing markdown or json files, uploading media to the correct directory and committing these updates to your repo directly.

The styles were coded & designed by yours truly, using [scss](https://sass-lang.com/) with [css modules](https://github.com/css-modules/css-modules) (which are [inherently support by gatsby](https://www.gatsbyjs.org/docs/css-modules/)) and the [bem](http://getbem.com/) naming convetion. The font used is [Work Sans](https://fonts.google.com/specimen/Work+Sans). 

##  Quick Setup

#### *Using the Gatsby CLI*
In your terminal, navigate to where you would like this blog to live, then run 
```bash 
gatsby new [SITE_DIRECTORY_NAME] https://github.com/kendallstrautman/brevifolia-gatsby-tinacms
cd [SITE_DIRECTORY_NAME]
yarn dev 
```
#### *Set-up Locally*
In your terminal, navigate to where you would like this blog to live, then run 
```bash
#clone the repo
git clone git@github.com:kendallstrautman/brevifolia-gatsby-tinacms.git

#navigate to the directory
cd brevifolia-gatsby-tinacms

#install dependencies & run dev server with yarn 
yarn install
yarn dev

#or with npm 
npm install
npm run dev
```
A new browser window should open with the dev server running or you can navigate to localhost:8000 

### Plugins

With Gatsby offering a plugin-rich ecosystem, there are a few key plugins that make this project possible. 

- [Gatsby-plugin-tinacms](https://github.com/tinacms/tinacms/tree/master/packages/gatsby-plugin-tinacms) allows us to use TinaCMS with Gatsby
- [Gatsby-tinacms-git](https://github.com/tinacms/tinacms/tree/master/packages/gatsby-tinacms-git) does the Tina magic for talking to Git
- [Gatsby-tinacms-json](https://github.com/tinacms/tinacms/tree/master/packages/gatsby-tinacms-json) helps us edit json data in our form fields.
- [Gatsby-tinacms-remark](https://github.com/tinacms/tinacms/tree/master/packages/gatsby-tinacms-remark) helps us edit markdown content from the blog.
- [Gatsby-image](https://using-gatsby-image.gatsbyjs.org/) optimizes image loading and provides the correct file paths for output. 
- [Gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=gatsby-tranf) gives us access to and transforms the markdown files, using also [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/?=gatsby-remark), [gatsby-remark-normalize-paths](https://www.gatsbyjs.org/packages/gatsby-remark-normalize-paths/?=gatsby-remark-no), & [gatsby-remark-relative-images](https://www.gatsbyjs.org/packages/gatsby-remark-relative-images/?=gatsby-remark-re) to make sure the content in the markdown works properly. 
- [Gatsby-transformer-json](https://www.gatsbyjs.org/packages/gatsby-transformer-json/?=gatsby-tranfor) allows us to use the data in .json files.
- [Gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass) lets us write styles using scss or sass. 
- [Gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react) extends the well-known react-helmet, allowing you to adjust content in the ‘head’ of your components. 

## Project Structure 

- Site-level configuration is stored in `config.json`. This file is loaded in the `gatsby-config.js` to configure Gatsby and all it to be accessible via siteMetaData in your graphql queries.
- Access any of Gatsby's [browser api's](https://www.gatsbyjs.org/docs/browser-apis/) via the `gatsby-browser.js`, or load global styles etc.
- Add and access plugin options or siteMetaData via `gatsby-config.js`
- Access Gatsby's [node api's](https://www.gatsbyjs.org/docs/node-apis/) via `gatsby-node.js`. This is where the creation of new blog pages or nodes is handled. 
- Edit styles via `src/styles/...`
- `content/`contains all your markdown blog posts, images & data files (e.g. authors list, info page data). 
- `src/pages` is a very important and required directory for Gatsby. This is where all your pages for the site live. 
- Blog posts are built from a template that can be accessed at `src/templates`. 
- The pages & template are comprised of components from `src/components`.

## Using Tina as your CMS 🦙

[Tina](https://tinacms.org) is an open-source site editing toolkit for React-based frameworks — Gatsby & Next.js. It's a lightweight but powerful toolkit for creating a content editing interface with JavaScript components. Tina allows you to create an intuitive UI for real-time content editing, built directly into your site. To learn more about using Tina with this starter, head over to the [Tina docs](https://tinacms.org/docs/getting-started/introduction). To get started editing with Tina, get the project up and running locally, open up the UI and navigate around to see what you can edit!

