import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description } , handleInputChange, reset ] = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        // creamos un nuevo todo
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);

        // reseteamos el formulario
        reset();
    }


    return (
        <>
            <h4>Agregar Todo</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Aprender..." 
                    autoComplete="off" 
                    className="form-control"
                    value= { description }
                    onChange={ handleInputChange }
                />
                <button 
                    className="btn btn-outline-primary mt-1" 
                    type="submit"
                >
                    Agregar
                    
                </button>
            </form>
        </>
    )
}
