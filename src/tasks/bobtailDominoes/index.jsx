import React from 'react'
import Project from '../../components/Project'
import completed from './completed'
import remaining from './remaining'
import next from './remaining/next'

const BobtailDominoesProject = () => (
    <Project
        {...{
            name: 'Bobtail Dominoes',
            tasks: [
                ...completed,
                ...remaining,
            ],
            nextTasks: next,
        }}
    />
)

export default BobtailDominoesProject
