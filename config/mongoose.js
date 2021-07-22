import config from './index'
import mongoose from 'mongoose'

module.exports = app => {
    try {
        mongoose.connect(
            config.mongoUrl, 
            { useNewUrlParser: true, useUnifiedTopology: true },
            (err) => { 
                console.log(err ? err : 'Mongoose is connected')
            }
        ) 
    } catch(err) {
        console.log(err)
    }

    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)
    process.on('SIGHUP', cleanup)

    if(app) {
        app.set('mongoose', mongoose)
    }
}

function cleanup() {
    mongoose.connection.close(() => {
        process.exit(0)
    })
}