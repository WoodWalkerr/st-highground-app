module.exports = (sequelize, DataTypes, Model) => {
    class Visit extends Model {}

    Visit.init(
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
                    key: 'id'
                }
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            time: {
                type: DataTypes.DATE,
                allowNull: false
            },
            purpose: {
                type: DataTypes.DATE,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'visits',
            tableName: 'visits'
        }
    )

    return Visit
}
