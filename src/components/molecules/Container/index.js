import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children, className, id, style}) => {
    return (
        <div 
            style={{padding: '0 56px', style}}
            className={className}
            id={id}
        >
            {children}
        </div>
    )
}

Container.propTypes = {
    id: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Container