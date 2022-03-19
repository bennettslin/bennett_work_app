import { getArrayOfIndices } from '../../../../utils/general'

import {
    initialiseDrawings,
    addActorTasksToSongDrawingTasks,
} from './helper'

const drawings = {}

getArrayOfIndices(20).forEach(songIndex => {
    initialiseDrawings(drawings, songIndex)
})

addActorTasksToSongDrawingTasks(drawings)

export default drawings
