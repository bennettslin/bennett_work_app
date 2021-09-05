import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'
import { replaceStraightWithSmartQuotes } from '../../utils/format/smartQuote'
import { APP_TITLE } from '../../utils/server'

const Helmet = () => {
    return (
        <ReactHelmet>
            <title>
                {replaceStraightWithSmartQuotes(APP_TITLE)}
            </title>
        </ReactHelmet>
    )
}

export default Helmet
