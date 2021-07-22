import repo from './repository'

exports.create = async (req, res) => {
    try {
        let user = await repo.createCard(req.body)
        res.success(user)
    } catch (err) {
        res.error(err)
    }
}

exports.list = async (req, res) => {
    try {
        let users = await repo.findUsers()
        console.log(users)
        res.success(users)
    } catch(err) {
        console.log(err)
        res.error(err)
    }
}

exports.find = async (req, res) => {
    try {
        let user = await repo.findUser(req.params.id)
        res.success(user)
    } catch (err) {
        res.error(err)
    }
}