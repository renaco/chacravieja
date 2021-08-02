const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Chacra Vieja - Licores Regionales`,
    description: `Licores Regionales Chacra Vieja - Moyobamba, San Martìn, Perú. Alto Mayo, Uvachado, Rompe calzón, Siete raíces, bodega, chocolates, tabacos`,
    author: `@renaco`,
    menuLinks: [
      {
        link: '/',
        label: 'INICIO'
      },
      {
        link: '/historia',
        label: 'HISTORIA'
      },
      {
        link: '/productos',
        label: 'PRODUCTOS'
      },
      {
        link: '/turismo-y-mas',
        label: 'TURISMO Y MÁS'
      },
      {
        link: '/galeria',
        label: 'GALERÍA'
      },
      {
        link: '/contacto',
        label: 'CONTACTO'
      },
    ]
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-W01MEBCXN9'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rokkitt:wght@200;600`,
          `source sans pro\ 200, 600`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@images": "src/images"
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
