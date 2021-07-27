import Express from 'express'
import CustomResponses from './middleware/CustomResponses'
import bodyParser from 'body-parser'
import path from 'path'
import cors from 'cors'

const app = Express()

app.use(CustomResponses)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

// app.set('view engine', 'pug')
// app.set('views', `${process.cwd()}/resources/views`)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/resources/index.html'))
})

require('./config/mongoose')(app)

app.use(Express.static('dist'))
require('./app/api.js')(app)
app.use('/', require('./resources/router'))

//Connect to Database and start app
app.listen(process.env.SERVER_PORT, () => console.log(`App listening on ${process.env.SERVER_PORT}`))