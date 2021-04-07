import PropTypes from 'prop-types'

 function TextInput(props) {
    const {type,placeholder,TextID,reference} = props
    return (
        <input type={type} name={TextID} ref={reference} placeholder={placeholder}  id={TextID}  />
    )
}

TextInput.propTypes = {
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    TextID:PropTypes.string.isRequired
}


export default TextInput