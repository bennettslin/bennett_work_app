import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ProjectSection from './ProjectSection'
import './style'

const Project = ({ name, tasks }) => (
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
        </div>
    </div>
)

Project.propTypes = {
    name: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
}

export default Project
