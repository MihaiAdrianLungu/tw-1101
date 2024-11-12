const users = require("../users")

const user = (() => {
    const dbUsers = [...users];

    return {
        async findOne(id) {
            return new Promise((resolve, reject) => {
                const user = dbUsers.find(el => el.id === id);

                if (!user) {
                    reject(new Error(`User with id ${id} not found.`))
                }

                resolve(user);
            })
        },

        async findMany(filters = {}) {
            return new Promise((resolve, reject) => {
                let filteredUsers = [...dbUsers];

                if(filters.name) {
                    filteredUsers = filteredUsers.filter(user => 
                        user.name.toLowerCase().includes(filters.name.toLowerCase())
                    )
                }

                if(filters.age) {
                    filteredUsers = filteredUsers.filter(user => 
                        user.age === Number(filters.age)
                    )
                }

                resolve(filteredUsers);
            })
        },

        async deleteOne(id) {
            return new Promise((resolve, reject) => {
                const index = dbUsers.findIndex(user => user.id === id);

                console.log(index)
                if(index !== -1) {
                    dbUsers.splice(index, 1);
                    resolve({message: 'User deleted successfully'});
                }

                reject(new Error(`User with id ${id} not found.`))
            })
        }
    }
})();

module.exports = user;