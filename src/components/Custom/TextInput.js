import React from 'react'
import PropTypes from 'prop-types'

 function TextInput(props) {
    const {type,placeholder,TextID,ref} = props
    return (
        <input type={type} ref={ref} placeholder={placeholder}  id={TextID}  />
    )
}

TextInput.propTypes = {
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    TextID:PropTypes.string.isRequired
}


export default TextInput