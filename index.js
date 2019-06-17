// Inicia la aplicacion

const app = process.env.APPLICATION;

require('@babel/register')({
  'extends' : './.babelrc',
  ignore : [/node_moules/]
})

require(`./handlers/${app}.js`)
