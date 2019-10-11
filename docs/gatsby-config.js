/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Zendesk Garden`,
    author: `Garden`,
    description: `The public documentation website for the Zendesk Garden Design System`,
    siteUrl: `https://garden.zendesk.com/`,
    social: {
      twitter: `zendeskcreative`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/content-strategy`,
        name: `content-strategy`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'packages',
        path: path.resolve(__dirname, '../packages/'),
        ignore: [
          '**/.*',
          '**/*.spec.js',
          '**/dist',
          '**/node_modules',
          '**/*.md',
          '**/*.json',
          '**/*.config.js'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'remark-autolink',
              icon: `<svg class="remark-autolink-svg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" focusable="false" viewBox="0 0 12 12">
              <path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 6l-1-1a2.482 2.482 0 010-3.5 2.482 2.482 0 013.5 0l2.25 2.25a2.482 2.482 0 010 3.5 2.458 2.458 0 01-.49.38M9.5 6l1 1a2.482 2.482 0 010 3.5 2.482 2.482 0 01-3.5 0L4.75 8.25a2.482 2.482 0 010-3.5 2.46 2.46 0 01.433-.345"/>
            </svg>`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-transformer-react-docgen',
    'gatsby-plugin-remove-trailing-slashes',
    `gatsby-plugin-styled-components`
  ]
};
