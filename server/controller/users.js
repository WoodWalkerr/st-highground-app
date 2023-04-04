const userService = require('../service/users')

class UserController {
    async getUsers() {
        return await userService.getUsers()
    }
    async createUser(user) {
        return await userService.createUser(user)
    }
    // async createUser(user) {
    //     return await userService.createUser(user)
    // }

    // async updateUser(user) {
    //     return await userService.updateUser(user)
    // }

//     async deleteUser(userId) {
//         // try {
//         //     const todo = await users.findByPk(userId);
//         //     if (todo) {
//         //       await todo.destroy();
//         //       res.json('Todo was deleted');
//         //     } else {
//         //       res.status(404).send('Todo not found!');
//         //     }
//         //   } catch (err) {
//         //     console.error(err.message);
//         //     res.status(500).send('Server error!');
//         //   }
//         return await userService.deleteUser(userId)
//     }
}

module.exports = new UserController()