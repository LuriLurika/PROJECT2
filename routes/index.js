module.exports = app => {

  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    req.isAuthenticated() ? res.locals.isBoss = req.user.role == "BOSS" : null
    next()
  })
  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/catalog', require('./catalog.routes'))
  app.use('/profile', require('./profile.routes'))
  app.use('/favorites', require('./favorites.routes'))
}
