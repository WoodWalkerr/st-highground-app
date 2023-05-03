module.exports = (sequelize, DataTypes, Model) => {
    class Notification extends Model {}

    Notification.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email : {
                type: DataTypes.STRING,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
        },
        {
            sequelize,
            modelName: 'notification',
            tableName: 'notification'
        }
    )

    return Notification
}