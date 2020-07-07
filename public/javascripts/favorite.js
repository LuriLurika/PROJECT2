

window.onload = () => {
    console.log('estoy en el onload')
    const newFavorites = document.querySelectorAll('#favorite')
    newFavorites.forEach(elm => {
       elm.addEventListener('click', addFavorite => {
           console.log('estoy en el click')
           console.log(elm.parentElement)
           const hiddenID = elm.parentElement.querySelector("#hiddenIdFav").value
           axios.post(`/favorites/add/${hiddenID}`)
       })
    })
    
}