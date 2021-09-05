import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getTimeStringFromHours,
    getFinishDateFromHours,
    getSumOfTasks,
} from './helper'
import './style'
import ProjectSectionRow from './Row'

const ProjectSection = ({
    isV2 = false,
    tasks,
}) => {
    const {
            workedHours,
            neededHours,
        } = getSumOfTasks(tasks),
        remainingHours = neededHours - workedHours,
        neededTime = getTimeStringFromHours(neededHours),
        workedTime = getTimeStringFromHours(workedHours),
        remainingTime = getTimeStringFromHours(remainingHours),
        finishDate = getFinishDateFromHours(remainingHours)

    return (
        <div
            {...{
                className: cx(
                    'ProjectSection',
                    isV2 && 'ProgressSection__v2',
                ),
            }}
        >
            {isV2 && (
                <h5>v2</h5>
            )}
            <ProjectSectionRow
                {...{
                    label: `${parseInt(neededHours)}h - ${parseInt(workedHours)}h =`,
                    value: `${parseInt(remainingHours)}h`,
                }}
            />
            <ProjectSectionRow
                {...{ label: 'needed time', value: neededTime }}
            />
            <ProjectSectionRow
                {...{ label: 'worked time', value: workedTime }}
            />
            <ProjectSectionRow
                {...{ label: 'remaining time', value: remainingTime }}
            />
            {!isV2 && (
                <ProjectSectionRow
                    {...{ label: 'finish date', value: finishDate }}
                />
            )}
        </div>
    )
}

ProjectSection.propTypes = {
    isV2: PropTypes.bool,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            taskName: PropTypes.string,
            workedHours: PropTypes.number,
            neededHours: PropTypes.number,
        }).isRequired,
    ).isRequired,
}

export default ProjectSection
