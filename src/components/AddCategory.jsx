import { useState } from 'react';

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({ onNewCategory }) => {

    //console.log(setCategories);

    const [ inputValue, setInputValue ] = useState('One Punch');

    // const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        //console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSumit = (event) => {
        // El preventDefault() método cancela el evento si es cancelable,
        // lo que significa que la acción predeterminada que pertenece 
        // al evento no ocurrirá.
        // Por ejemplo, esto puede ser útil cuando:

        // Al hacer clic en un "Submit" botón, evitar que enviar un formulario
        // Al hacer clic en un enlace, prevenir el enlace desde la URL siguiente
        // Nota: No todos los eventos son cancelables. Usar la cancelable propiedad 
        //       para averiguar si un evento se puede cancelar.
        // Nota: El preventDefault() método no impide la propagación adicional de 
        //       un evento a través de la DOM. Usar la stopPropagation() método 
        //       para manejar esto.
        event.preventDefault();
        //console.log(inputValue);

        //  Esta instrucción sirve para especificarle al programa que solo tome palabras mayores a 1
        if ( inputValue.trim().length <= 1 ) return;

        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        // <form onSubmit={ (event) => onSumit(event) }>
        <form onSubmit={ onSumit }>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value={ inputValue }
                //onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>  
    )
}
