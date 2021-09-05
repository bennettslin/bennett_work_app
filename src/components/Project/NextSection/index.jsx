import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const NextSection = ({
    nextTasks,
}) => (
    <div
        {...{
            className: cx(
                'NextSection',
            ),
        }}
    >
        {nextTasks.map(({
            taskName,
            workedHours,
            neededHours,
        }, index) => (
            <div {...{ key: index, className: cx('NextSection__row') }}>
                <p>{taskName}</p>
                <p>{workedHours}h/{neededHours || workedHours}h</p>
            </div>
        ))}
    </div>
)

NextSection.propTypes = {
    nextTasks: PropTypes.arrayOf(
        PropTypes.shape({
            taskName: PropTypes.string,
            workedHours: PropTypes.number,
            neededHours: PropTypes.number,
        }).isRequired,
    ).isRequired,
}

export default NextSection
