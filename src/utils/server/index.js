export const APP_TITLE = 'Bennett\'s work tracker'
export const APP_DESCRIPTION =
    'Bennett\'s personal work tracker.'

export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return 'bennettWork_local'
        default:
            return 'bennettWork'
    }
}
