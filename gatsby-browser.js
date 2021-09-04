import { logBuild } from './src/utils/build'
import { globaliseLogs } from './src/utils/global'

// Import these here just to make them available.
import './src/scss/style'

globaliseLogs()
logBuild()

export { wrapRootElement } from './src/utils/gatsby'
