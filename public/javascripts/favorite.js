window.onload = () => {

    const newFavorites = document.querySelectorAll('#favorite')

    newFavorites.forEach(elm => { 
       elm.addEventListener('click', e => { 
           e.preventDefault()
           
           const hiddenID = elm.parentElement.querySelector("#hiddenIdFav").value
           
            if (response.data.result) {
                console.log('ha ido bien')
                
            } else {
                window.location = "/login"
            }
       })
    })   
}