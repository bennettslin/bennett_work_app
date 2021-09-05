import React from 'react'
import Project from '../../components/Project'
import completed from './completed'
import remaining from './remaining'
import next from './remaining/next'

const BobtailYearlingsProject = () => (
    <Project
        {...{
            name: 'Bobtail Yearlings',
            tasks: [
                ...completed,
                ...remaining,
            ],
            nextTasks: next,
        }}
    />
)

export default BobtailYearlingsProject
