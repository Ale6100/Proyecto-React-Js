const listaDeIdsEnLaNav = ["navInicio", "navPlanetas", "navSatelites", "navOtros", "navCarrito"]

const actualizarClase = (idSeleccionado) => { // Coloca la clase "seleccionado" en el link de la NavBar que representa la ubicación actual del usuario. Esta clase agrega un color distintivo de fondo
    listaDeIdsEnLaNav.forEach(id => {
        if (id===idSeleccionado) {
            document.getElementById(idSeleccionado).classList.add("seleccionado")
        } else {
            document.getElementById(id).classList.remove("seleccionado")
        }
    })
}

export default actualizarClase
