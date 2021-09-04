import { logServe } from '../logger'

export const globaliseLogs = () => {
    global.logServe = logServe
}
