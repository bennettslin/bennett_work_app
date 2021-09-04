import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const App = ({ children }) => (
    <div
        {...{
            className: cx(
                'App',
                'font__text',
            ),
        }}
    >
        {children}
    </div>
)

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
