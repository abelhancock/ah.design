const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: './src',
			},
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        static: path.join(__dirname, 'static'),
        images: path.join(__dirname, 'static/images'),
        audio: path.join(__dirname, 'static/audio'),
        
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
  ],
}

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },
  })
}