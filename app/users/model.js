import mongoose from 'mongoose'

let Schema = mongoose.Schema

let UserSchema = new Schema({
    name: String,
    email: String
}, { timestamps: true })

module.exports = mongoose.model('user', UserSchema)