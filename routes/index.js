module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/catalog', require('./catalog.routes'))
  app.use('/profile', require('./profile.routes'))
  app.use('/favorites', require('./favorites.routes'))
}
