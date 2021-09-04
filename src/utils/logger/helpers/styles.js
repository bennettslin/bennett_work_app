export const SERVE = 'serve'

const BASE_STYLES = {
    // Show turquoise background by default.
    backgroundColor: '#f0ffff',
    color: '#888',
    padding: '6px 8px',
    margin: '2px 0',
    border: '1px solid #bbb',
    borderRadius: '4px',
    fontSize: '1.25em',
}

const LOG_STYLES = {
    [SERVE]: {
        fontSize: '1.1em',
    },
}

const _getStyles = (styles) => {
    const stylesArray = []

    for (const key in styles) {
        // Change camel case to dashed case.
        const dashedKey =
            key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)

        stylesArray.push(`${dashedKey}: ${styles[key]};`)
    }
    return stylesArray.join(' ')
}

export const getStyleForCategoryLog = category => (
    _getStyles({
        ...BASE_STYLES,
        ...LOG_STYLES[category],
    })
)
