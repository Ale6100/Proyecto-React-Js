const fetchSimulado = (array) => { // Creo una promesa simulando traer un array desde el backend que tarde 2 segundos
    let promesaResuelta = true
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (promesaResuelta) {
                resolve(array)
            } else {
                reject("Error: no se pudieron traer los datos solicitados")
            }
        }, 100)
    })
}

export default fetchSimulado