const Chat = require('../models/chatmodels')

const getall = async (req, res) => {

    const chats = await Chat.find({}).sort({ createdAt : +1 })

    res.status(200).json(chats)

}

const createChat = async (req, res) => {

    const {name, message} = req.body

    try {
        const chats = await Chat.create({name, message})
        res.status(200).json(chats)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getone = async (req, res) => {

    const { id } = req.params
    const chats = await Chat.findById({ id })

    if (!chats) {
        res.status(404).json('no chat can be founded')
    }
    res.status(200).json(chats)
}

module.exports = {
    getall,
    createChat,
    getone
}