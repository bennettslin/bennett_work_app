import React from 'react'
import cx from 'classnames'
import Project from './Project'
import Helmet from '../../components/Helmet'
import bobtailDominoes from '../../tasks/bobtailDominoes'
import bobtailYearlings from '../../tasks/bobtailYearlings'
import byCombo from '../../tasks/byCombo'
import yearlingsBobtail from '../../tasks/yearlingsBobtail'
import { replaceStraightWithSmartQuotes } from '../../utils/format/smartQuote'
import './style'

const Page = () => {
    return (
        <div
            className={cx(
                'Page',
                'font__text',
            )}
        >
            <Helmet />
            <Project
                {...{
                    name: 'Bobtail Dominoes',
                    tasks: bobtailDominoes,
                }}
            />
            <Project
                {...{
                    name: 'Bobtail Yearlings',
                    tasks: bobtailYearlings,
                }}
            />
            <Project
                {...{
                    name: 'BYCombo',
                    tasks: byCombo,
                }}
            />
            <Project
                {...{
                    name: replaceStraightWithSmartQuotes(`Yearling's Bobtail`),
                    tasks: yearlingsBobtail,
                }}
            />
        </div>
    )
}

export default Page
