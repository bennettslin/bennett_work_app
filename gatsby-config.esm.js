import {
    APP_DESCRIPTION,
    APP_TITLE,
    getFaviconFileName,
} from './src/utils/server'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: APP_TITLE,
                short_name: APP_TITLE,
                description: APP_DESCRIPTION,
                start_url: '/',
                background_color: '#e6e6ad',
                theme_color: '#b38e6b',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
    ],
}
