import React from 'react'
import Project from '../../components/Project'
import completed from './completed'
import remaining from './remaining'
import next from './remaining/next'

const BYComboProject = () => (
    <Project
        {...{
            name: 'BYCombo',
            tasks: [
                ...completed,
                ...remaining,
            ],
            nextTasks: next,
        }}
    />
)

export default BYComboProject
