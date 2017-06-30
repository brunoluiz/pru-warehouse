const fs = require('fs')
const path = require('path')
const dir = __dirname

const isDirectory = (dir, file) =>
  fs.lstatSync(path.join(dir, file)).isDirectory()

const importComponent = (app, component) =>
  app.use(`/${component}`, require(`./${component}`))

const routes = (app) => {
  fs.readdirSync(dir)
    .filter(file => isDirectory(dir, file))
    .forEach(component => importComponent(app, component))
}

module.exports = routes
