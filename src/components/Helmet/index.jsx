import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'
import { replaceStraightWithSmartQuotes } from '../../utils/format/smartQuote'

const Helmet = () => {
    return (
        <ReactHelmet>
            <title>
                {replaceStraightWithSmartQuotes(`Bennett's work tracker`)}
            </title>
        </ReactHelmet>
    )
}

export default Helmet
