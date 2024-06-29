import { useState } from 'react'
export const useForm = (initialForm = {}) => {
    // INICIALIZAR CON CADA PROPIEDA DE LOS INPUT

    const [formState, setFormState] = useState(initialForm)

    // GENERAMOS EL METODO ONINPUTCHANGE AQUI Y DIRECTAMENTE RECIBIMOS EL EVENTO AQUI
    // PARA PODER UTILIZARLO EN EL INPUT
    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState, 
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
