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
            visit_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            visit_time: {
                type: DataTypes.TIME,
                allowNull: false
            },
            purpose: {
                type: DataTypes.STRING,
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