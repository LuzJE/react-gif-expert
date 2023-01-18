import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // Podemos desestructurar lo que sea de un customer hook
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                // es un if, si isLoading esta en true entonces ejecuta la segunda parte, de lo contrario ya no se ejecuta la instrucción siguiente
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='card-grid'>
                {/* images.map.. */}
                { 
                    images.map( ( image ) => ( 
                        <GifItem 
                            key={ image.id } 
                            { ...image }  // todas las propiedades que vengan  en el image las esparcimos
                        />                 
                    )) 
                }

            </div>

        </>
    )
}
