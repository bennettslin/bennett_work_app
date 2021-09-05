import React from 'react'
import Project from '../../components/Project'
import completed from './completed'
import remaining from './remaining'
import next from './remaining/next'
import { replaceStraightWithSmartQuotes } from '../../utils/format/smartQuote'

const YearlingsBobtailProject = () => (
    <Project
        {...{
            name: replaceStraightWithSmartQuotes(`Yearling's Bobtail`),
            tasks: [
                ...completed,
                ...remaining,
            ],
            nextTasks: next,
        }}
    />
)

export default YearlingsBobtailProject
