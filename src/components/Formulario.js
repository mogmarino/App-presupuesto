import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    // definimos el state
    const[nombre,guardarNombre] = useState('')
    const[cantidad,guardarCantidad] = useState(0)
    const[error,guardarError] = useState(false)

    // funcion para agregar gasto
    const agregarGasto = e =>{
        e.preventDefault()

        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        // construir el gasto 

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        // resetear el form
        guardarNombre('')
        guardarCantidad(0)
    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error msj='Ambos campos son obligatorios o el presupuesto no es valido'/> : null}
            <div className='campo'>
                <label>Nombre gasto</label>
                <input 
                    type='text'
                    placeholder='Ej. Transporte'
                    className='u-full-width'
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad gasto</label>
                <input 
                    type='number'
                    placeholder='Ej. 500'
                    className='u-full-width'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired

}

 
export default Formulario;