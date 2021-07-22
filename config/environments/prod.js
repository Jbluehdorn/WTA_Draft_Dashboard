module.exports = {
    host: '127.0.0.1',
    port: process.env.SERVER_PORT,
    mongoUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jfdtc.mongodb.net/wtaDraftBracket?retryWrites=true&w=majority`
}