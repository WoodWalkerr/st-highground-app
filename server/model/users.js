module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model {}

    User.init(
        {
            username: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'users',
        }
    )

    return User
}