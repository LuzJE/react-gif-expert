import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook no es más que una función que regresa algo
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    // El useEffect es un Hook de React que sirve para disparar efectos secundarios, un
    // efecto secundario es un proceso que queremos ejecutar cuando algo suceda, por ejemplo:
    // cuando el counter cambie disparamos un efecto, cuando la categoría cambie quiero disparar un efecto, 
    // cuando el componente se renderize por primera vez quiero disparar un efecto

    // Con este useEffect ya no se van a realizar más peticiones
    useEffect(() => {
       getImages();
       //console.log(images);
    }, []) // el arreglo es de dependiencias, si lo dejo vacío significa que el hook solo se va a disparar la primera vez que se crea y se construye mi componente


  return {
    images, // images: images,
    isLoading
  }
}
