module.exports = (sequelize, DataTypes, Model) => {
    class VisitorLog extends Model {}

    VisitorLog.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            check_in_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            check_in_time: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            check_out_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            check_out_time: {
                type: DataTypes.TIME,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'VisitorLog',
            tableName: 'visitor_log',
        }
    )

    return VisitorLog
}
