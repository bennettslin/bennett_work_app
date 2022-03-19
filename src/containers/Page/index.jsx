import React from 'react'
import cx from 'classnames'
import Helmet from '../../components/Helmet'
import BobtailDominoesProject from '../../tasks/bobtailDominoes'
import BobtailYearlingsProject from '../../tasks/bobtailYearlings'
import BYComboProject from '../../tasks/byCombo'
import YearlingsBobtailProject from '../../tasks/yearlingsBobtail'
// import Drawing from '../../components/Drawing'
import './style'

const Page = () => (
    <div
        className={cx(
            'Page',
            'font__text',
        )}
    >
        <Helmet />
        <BobtailDominoesProject />
        <BobtailYearlingsProject />
        <BYComboProject />
        <YearlingsBobtailProject />
        {/* <Drawing /> */}
    </div>
)

export default Page
