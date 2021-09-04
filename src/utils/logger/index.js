import { getTimeDifference } from './helpers/time'

import {
    SERVE,
    getStyleForCategoryLog,
} from './helpers/styles'

const _log = ({
    log,
    styles,
    level = 'info',
    category,
    styleCategory,

}) => {
    const timeDifference = getTimeDifference()

    if (log) {
        console[level](
            `%c${log}`,
            styles || getStyleForCategoryLog(styleCategory || category),
            timeDifference,
        )
    }
}

export const logServe = (log, props) => {
    _log({
        log,
        category: SERVE,
        useTimeForValue: true,
        ...props,
    })
}
