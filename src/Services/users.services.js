const { Users, Conversations } = require('../models');

class UsersServices {
    static async add(newUser){
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getUsersJoinConversations(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: [
                    "firstname",
                    "lastname",
                    "email"
                ],
                include: {
                    model: Conversations,
                    as: "chats",
                    attributes: [
                        "id",
                        "title",
                        "type"
                    ],
                },     
            });
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = UsersServices;