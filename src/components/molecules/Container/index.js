import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children, className}) => {
    return (
        <div 
            style={{padding: '0 56px'}}
            className={className}
        >
            {children}
        </div>
    )
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Container