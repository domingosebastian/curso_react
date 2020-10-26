import React from 'react';
import PropTypes from 'prop-types';


import { Formik } from 'formik';
// Hacer uso de YUP para validar nuestros formularios
import * as Yup from 'yup';

import '../styles/Formik.css';


const ContactForm = ({submit}) => {

    return (
        <Formik 
                initialValues = { {
                    nombre: '',
                    apellidos: '',
                    email: '',
                    telefono: '',
                    empresa: '',
                    sector: ''
                } }
                validationSchema = {
                    Yup.object().shape(
                        {
                            nombre: Yup.string().required('El nombre es obligatorio')
                                    .max(10, 'Longitud máxima del nombre 10'),
                            apellidos: Yup.string(),
                            email: Yup.string(),
                            telefono: Yup.string(),
                            empresa: Yup.string(),
                            sector: Yup.string()

                        }
                    )
                }
                onSubmit = {
                (values, { setSubmitting, resetForm }) => {
                    submit( values.nombre, 
                            values.apellidos,
                            values.email,
                            values.telefono,
                            values.empresa,
                            values.sector);
                    setSubmitting(false);
                    resetForm();
                }
            }

            >
            { props => {
                const { values, touched, errors, handleSubmit, handleChange,  handleBlur, resetForm } = props;
                return  (
                    <div>
                        <form onSubmit = {handleSubmit}>
                            <div className='entry'>
                                <label htmlFor='nombre'>Nombre: </label>
                                <input name='nombre' 
                                    type='text' 
                                    placeholder='nombre'
                                    value={values.nombre} 
                                    onChange = {handleChange}  
                                    onBlur = {handleBlur} 
                                    className = {errors.nombre && touched.nombre && 'error'}    
                                    />
                                    {
                                        errors.nombre && touched.nombre && (
                                            <span className='input-error'>
                                                {errors.nombre}
                                            </span>
                                        )
                                    }
                            </div>
                            <div className='entry'>
                                <label htmlFor='apellidos'>Apellidos: </label>
                                <input name='apellidos' 
                                    type='text' 
                                    placeholder='apellidos'
                                    value={values.apellidos} 
                                    onChange = {handleChange}  
                                    onBlur = {handleBlur} 
                                    />
                            </div>
                            <div className='entry'>
                                <label htmlFor='email'>Email: </label>
                                <input  name='email' 
                                        type='text'
                                        placeholder='email'
                                        value={values.email}
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}  />
                            </div>
                            <div className='entry'>
                                <label htmlFor='telefono'>Teléfono: </label>
                                <input  name='telefono' 
                                        type='text'
                                        placeholder='telefono'
                                        value={values.telefono} 
                                        onChange = {handleChange}  
                                        onBlur = {handleBlur} 
                                        />
                            </div>
                            <div className='entry'>
                                <label htmlFor='empresa'>Empresa: </label>
                                <input name='empresa' 
                                        type='text'  
                                        placeholder='empresa'
                                        value={values.empresa} 
                                        onChange = {handleChange}  
                                        onBlur = {handleBlur} 

                                        />
                            </div>
                            <div className='entry'>
                                <label htmlFor='sector'>Sector: </label>
                                <select name='sector' 
                                    value={values.sector}
                                    onChange = {handleChange}  
                                    onBlur = {handleBlur} 
                                >
                                    <option value=''>Seleccionar</option>
                                    <option value='Finanzas'>Finanzas</option>
                                    <option value='Tecnológico'>Tecnológico</option>
                                    <option value='Alimentación'>Alimentación</option>'
                                </select>
                            </div>
                            <button type='submit'>Nuevo</button>
                            <button type='button' onClick={ resetForm }>Limpiar (formulario)</button>

                            <br />

                        </form>

                        
                </div>

                )
            }
            }
        </Formik>
    );


};

ContactForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default ContactForm;