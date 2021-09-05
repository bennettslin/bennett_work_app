import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ProjectSection from './ProjectSection'
import NextSection from './NextSection'
import './style'

const Project = ({ name, tasks, nextTasks }) => (
    <div
        {...{
            className: cx(
                'Project',
            ),
        }}
    >
        <div
            {...{
                className: cx(
                    'Project__field',
                ),
            }}
        >
            <h3>{name}</h3>
            <ProjectSection {...{ tasks }} />
            <NextSection {...{ nextTasks }} />
        </div>
    </div>
)

Project.propTypes = {
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    nextTasks: PropTypes.array.isRequired,
}

export default Project
