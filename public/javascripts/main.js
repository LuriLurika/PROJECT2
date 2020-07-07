let myMap

window.onload = () => {

    let mapOptions = {
        center: {
            //lo centro en Sol
            lat: 40.416664,
            lng: -3.703813
        },
        zoom: 15,
        styles: mapStyles.retro
    }

    myMap = new google.maps.Map(document.getElementById("myMap"), mapOptions)
    
    markerOptions()

    function markerOptions() {
        const hiddenID = document.querySelector("#hiddenId").value
        axios.get(`/catalog/${hiddenID}/api`)
            .then(carsApi => {

                const cars = carsApi.data
                cars.forEach(elm => {
                    
                    let center = {

                        lat: elm.location.coordinates[0],
                        lng: elm.location.coordinates[1]
                    }

                    new google.maps.Marker({
                        position: center,
                        map: myMap,
                        title: elm.name
                    })

                })
                myMap.setCenter({
                    lat: cars[0].location.coordinates[0],
                    lng: cars[0].location.coordinates[1]
                })
            })
            .catch(err => console.log('error', err))
    }

}