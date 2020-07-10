# Popinocar

Popinocar es nuestro segundo proyecto del bootcamp de desarrollo web de Ironhack. Para este proyecto hemos creado una web de compra/venta de vehículos. En la web el usuario puede realizar búsquedas gracias a un filtro que permite acotar mucho el objetivo de la misma, puede agregar/quitar vehículos a una lista propia de favoritos que puede ver desde su perfil, puede crear/editar/borrar sus anuncios, y contactar con los vendedores de los vehículos en los que esté interesado sin ver los datos de contacto. Para la mayora de las funcionalidades se requiere un inicio de sesión

## Enlace al site

Puedes ver la web en esta url: https://popinocar.herokuapp.com/

## Dependencias utilizadas:

"bcrypt": "^4.0.1",
   "body-parser": "^1.18.3",
   "cloudinary": "^1.22.0",
   "connect-flash": "^0.1.1",
   "cookie-parser": "^1.4.3",
   "dotenv": "^6.0.0",
   "express": "^4.16.3",
   "express-session": "^1.17.1",
   "hbs": "^4.0.1",
   "mongoose": "^5.2.10",
   "morgan": "^1.9.0",
   "multer": "^1.4.2",
   "multer-storage-cloudinary": "^2.2.1",
   "node-sass-middleware": "^0.11.0",
   "nodemailer": "^6.4.10",
   "passport": "^0.4.1",
   "passport-local": "^1.0.0",
   "serve-favicon": "^2.5.0"

## Tabla de Endpoints

| ID | Routes                          | Method | Description                                                  |
|----|---------------------------------|--------|--------------------------------------------------------------|
| 1  | /                               | GET    | Main view.                                                   |
| 2  | /catalog                        | GET    | Muestra el catálogo.                                         |
| 3  | /catalog/:id                    | GET    | Muestra detalle                                              |
| 4  | /login                          | GET    | Inicio sesión                                                |
| 5  | /login                          | POST   | Envía datos a la BBDD con passport                           |
| 6  | /sign-up                        | GET    | Registro de usuario                                          |
| 7  | /sign-up                        | POST   | Envía datos a la BBDD.                                       |
| 8  | /profile                        | GET    | perfil de usuario                                            |
| 9  | /profile/new                    | GET    | crear anuncio desde perfil                                   |
| 10 | /profile/new                    | POST   | envía datos a la BBDD                                        |
| 11 | /profile/show                   | GET    | muestra tus anuncios                                         |
| 12 | /profile/:id/edit-car           | GET    | Editas tu anuncio desde el perfil.                           |
| 13 | /profile/:id/edit-car           | POST   | Envías cambios a la BBDD                                     |
| 14 | /profile/:id/delete             | POST   | Borrar coche                                                 |
| 15 | /catalog/add                    | GET    | Usuarios pueden crear un anuncio                             |
| 16 | /catalog/add                    | POST   | Envía datos a la BBDD                                        |
| 20 | /catalog/:id/edit               | GET    | BOSS: edita coche                                            |
| 21 | /catalog/:id/edi                | POST   | BOSS: manda coche editado a la BBDD                          |
| 22 | /catalog/:id/delete             | POST   | BOSS: elimina coche                                          |
| 23 | /catalog/:carId/api             | POST   | Envía información a la API GOOGLE                            |
| 24 | /favorites/add/:id              | POST   | Envía los favoritos a la BBDD                                |
| 25 | /search                         | POST   | Envía información del filtro                                 |
| 26 | /admin                          | GET    | Carga la lista de usuarios registrados                       |
| 27 | /admin/:id/delete               | POST   | Borra usuarios                                               |

## Autores

* **Laura Martinez** - (https://github.com/LuriLurika)
* **Víctor Sánchez** - (https://github.com/victor1305)



