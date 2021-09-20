import React from 'react';
import PropTypes from 'prop-types'

const Error = (props) => {
    return (  
        <p className='alert alert-danger error'>{props.msj}</p>
    );
}
 
Error.propTypes = {
    msj: PropTypes.string.isRequired
}

export default Error;