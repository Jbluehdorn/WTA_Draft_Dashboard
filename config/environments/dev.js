module.exports = {
    host: '127.0.0.1',
    port: process.env.SERVER_PORT,
    mongoUrl: `mongodb+srv://admin:${process.env.DB_PASS}@cluster0.jfdtc.mongodb.net/WTA_Draft_Bracket?retryWrites=true&w=majority`
}