import React from 'react'
import PropTypes from 'prop-types';
 function Button(props) {
    const {onClick,iconClassName,type,textButton} = props
    return (
        <button type={type} onClick={onClick} ><i className={iconClassName}></i>{textButton}</button>
    )
}

Button.propTypes = {
    onClick:PropTypes.func,
    iconClassName:PropTypes.string
}
export default Button;
