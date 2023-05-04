module.exports = (sequelize, DataTypes, Model) => {
    class Notification extends Model {}

    Notification.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            email : {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Notification',
            tableName: 'notification'
        }
    )

    return Notification
}