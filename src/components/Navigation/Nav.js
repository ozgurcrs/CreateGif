import React from 'react'
import PropTypes from 'prop-types'

function Nav(props) {
    const { ListName, iconClassName } = props
    return (
        <li><i className={iconClassName}></i> {ListName}</li>
    )
}


Nav.propTypes = {
    ListName: PropTypes.string,
    iconClassName: PropTypes.string
}


export default Nav;



