import { useState } from "react"

export const useCounter = (valorInicial = 0) => {
    const [contador, setContador] = useState(valorInicial)

    const incrementar = ( valor = 1 ) => {
        setContador(contador + valor)
    };

    const decrementar = (valor = 1, negativo =true) => {
        if (!negativo && contador - valor < valor)  return
        setContador(0)
    };

    const resetear = () => {
        setContador(0)
    }

    // Devolvemos un objeto con las variables y funciones que queremos exponer
    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
