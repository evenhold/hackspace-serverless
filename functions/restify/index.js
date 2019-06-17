import restify from 'restify'
import Notifications from './server/routes/notifications'

const signale = require('signale')

const corsMiddleware = require('restify-cors-middleware')

const service = process.env.APPLICATION;
const port = process.env.PORT_REST;
const version = 'v1';


const cors = corsMiddleware({
    allowHeaders : [ 'X-App-Version' ],
    exposeHeaders: [],
    origins      : [ '*' ]
})

const server = restify.createServer({
    name: 'Hackspace'
})

const RR = require('restify-router')

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())
server.pre(cors.preflight)
server.use(cors.actual)

server.use(cors.actual);

// router.add( '/notifications', Notifications );
// router.applyRoutes( server );


//Mostrara un json en la ruta raiz
server.get('/', (req, res) => {
    res.json({
      date : Date.now(),
      service : service,
      version : version
    })
})

// Escuchando el servidor
server.listen(process.env.PORT_REST, () => {
  signale.success(`[Hackspace] Server ready in ${process.env.PORT_REST}`)
})
