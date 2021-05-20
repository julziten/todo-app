import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li className="list-group-item" >
            <p 
                className={`m-0 ${ todo.done && 'complete'} `}
                onClick= { () => handleToggle(todo.id) }
                > { index + 1 }. { todo.desc }
            </p>

            <button 
                className="btn btn-danger"
                onClick={ () => handleDelete(todo.id) }
            > 
                Borrar
            </button>
        </li>
    )
}
