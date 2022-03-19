import general from './general'
import illustrator from './illustrator'
import legacy from './legacy'
import songs from './songs'

export default [
    ...general,
    ...illustrator,
    ...legacy,
    ...[].concat(...songs),
]
