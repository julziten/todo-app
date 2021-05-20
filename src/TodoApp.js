import React, { useEffect, useReducer } from 'react';
// import { todoReducer } from './todoReducer';
import './TodoApp.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { todoReducer } from './reducers/todoReducer';

// la funcion init devuelve el initialState, que se inicializo como un array vacio

const init = () => {
    // si existen todos tengo que regresar esos todos pero como arreglo, y si no existen tengo que regresar un arr vacio (inital state)
    return JSON.parse(localStorage.getItem('todos')) || []; 
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>Todo App ({ todos.length }) </h1>
            <hr/>
            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                    />

                </div>

                <div className="col-5">

                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>
                
            </div>
        </div>
    )
}
