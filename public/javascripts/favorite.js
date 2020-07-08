window.onload = () => {

    const newFavorites = document.querySelectorAll('#favorite')

    newFavorites.forEach(elm => { 
       elm.addEventListener('click', e => { 
           e.preventDefault()
           
           const hiddenID = elm.parentElement.querySelector("#hiddenIdFav").value

           axios.post(`/favorites/add/${hiddenID}`) 
            .then(response => {
                    
                if (response.data.result) {
                    window.location = "/catalog"
                
                } else {
                    window.location = "/login"
                
                }
            })
       })
    })   
}