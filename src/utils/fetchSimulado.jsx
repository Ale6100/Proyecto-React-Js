const fetchSimulado = (array) => { // Creo una promesa simulando traer un array desde el backend que tarde 2 segundos
    let promesaResuelta = true
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (promesaResuelta) {
                resolve(array)
            } else {
                reject("Promesa no resuelta")
            }
        }, 2000)
    })
}

export default fetchSimulado