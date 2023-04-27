module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model {}

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name : {
                type: DataTypes.STRING,
                allowNull: false
            },
            email : {
                type: DataTypes.STRING,
                allowNull: false
            },
            password : {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone_number : {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'users',
            tableName: 'users'
        }
    )

    return User
}