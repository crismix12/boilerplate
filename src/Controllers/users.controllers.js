const UsersServices = require("../Services/users.services");


const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.add(newUser);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'faltan datos'
        });
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const users = await UsersServices.getAll();
        res.json(users);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        });
    }
}

const getUserConversations = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await UsersServices.getUsersJoinConversations(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createUser,
    getUserConversations,
    getAllUser
}