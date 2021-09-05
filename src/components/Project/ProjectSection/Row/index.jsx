import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ProjectSectionRow = ({
    label,
    value,
}) => {
    return (
        <div
            {...{
                className: cx(
                    'ProjectSectionRow',
                ),
            }}
        >
            <label>{label}</label>
            <p>{value}</p>
        </div>
    )
}

ProjectSectionRow.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
}

export default ProjectSectionRow
