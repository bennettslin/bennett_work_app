import format from 'date-fns/format'

const getDateTimeForConsole = dateTime => (
    `${format(dateTime, 'MMMM d, yyyy, h:mmaaaaa')}m`
)

export const logBuild = () => {
    logServe(
        `Serving app built on ${getDateTimeForConsole(BUILD_DATE_TIME)}.`,
    )
    logServe(
        `IS_RUNTIME is ${IS_RUNTIME ? 'true' : 'false'}, IS_PRODUCTION is ${IS_PRODUCTION ? 'true' : 'false'}.`,
    )
}
