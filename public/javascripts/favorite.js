window.onload = () => {
    const newFavorites = document.querySelectorAll('#favorite') //BUSCAMOS TODOS LOS ELEMENTOS QUE QUEREMOS ACTUALIZAR
    newFavorites.forEach(elm => { //NOS DEVUELVE TODOS LOS ELEMENTOS  (NEWFAVORITES) Y POR CADA ELEMENTO ITERAMOS PARA AÑADIRLE LA FUNCIONALIDAD QUE QUEREMOS
       elm.addEventListener('click', e => { // SOBREESCRIBIMOS EL CLICK POR:
           e.preventDefault() //ELIMINA EL COMPORTAMIENTO NATIVO DEL COMPOMENTE (EL ENLACE)
           const hiddenID = elm.parentElement.querySelector("#hiddenIdFav").value //CREAMOS UN FORMULARIO OCULTO EN EL HBS PARA ACCEDER AL ID. ACCEDEMOS AL PADRE PORQUE ASÍ LO TENEMOS EN EL HBS. SOBRE ELM QUE ES EL ENLACE ACTUAL QUE HA HECHO CLICK, BUSCAMOS SU PADRE Y SOBRE LOS HIJOS BUSCAMOS EL CAMPO OCULTO
           axios.post(`/favorites/add/${hiddenID}`)//CON ESE ID HACEMOS UNA PETICION AL SERVER CON AXIOS
               .then(response => {
                   if (response.data.result) {
                       console.log('ha ido bien')
                       
                   } else {
                       window.location = "/login"
                   }
           })
       })
    })
    
}