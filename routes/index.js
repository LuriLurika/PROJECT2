module.exports = app => {

  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    if (req.isAuthenticated()) {
    res.locals.isBoss = req.user.role == "BOSS"
    }
    next()
  })
  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/catalog', require('./catalog.routes'))
  app.use('/profile', require('./profile.routes'))
  app.use('/favorites', require('./favorites.routes'))
}
