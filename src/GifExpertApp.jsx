import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // si contamos con un index no es necesario escribirlo

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
   
    //const onAddCategory = () => {
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        //console.log(newCategory);
        // setCategories(['Valorant', ...categories]);
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                // onNewCategory={ onAddCategory }
                // No importa el nombre que tenga el evento si es posicional, en este caso "value"
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {/* <ol> */}
            { 
                categories.map( ( category ) => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    )) 
            }
                
            {/* </ol> */}
                {/* Gif Item */}
        </>
    )
}
