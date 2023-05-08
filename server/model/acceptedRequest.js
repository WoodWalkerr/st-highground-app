module.exports = (sequelize, DataTypes, Model) => {
    class AcceptedRequest extends Model {}

    AcceptedRequest.init(
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
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            time: {
                type: DataTypes.TIME,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'AcceptedRequest',
            tableName: 'accepted_request'
        }
    )

    return AcceptedRequest
}