import React from 'react'
import PropTypes from 'prop-types';
 function Button(props) {
    const {onClick,iconClassName,type} = props
    return (
        <button type={type} onClick={onClick} ><i className={iconClassName}></i></button>
    )
}

Button.propTypes = {
    onClick:PropTypes.func,
    iconClassName:PropTypes.string
}
export default Button;
