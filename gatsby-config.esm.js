import { getFaviconFileName } from './src/utils/server'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bennett's work`,
                short_name: `Bennett's work`,
                description: 'Bennett\'s personal work tracker',
                start_url: '/',
                background_color: '#e6e6ad',
                theme_color: '#b38e6b',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
    ],
}
