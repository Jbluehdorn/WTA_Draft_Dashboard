import config from './index'
import mongoose from 'mongoose'

module.exports = app => {
    mongoose.connection.on('open', (ref) => {
        mongoose.connection.db.listCollections().toArray((err, names) => {
            console.log(names)
        })
    })

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