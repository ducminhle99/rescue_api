const config = require('../config/db.config');
const {Sequelize} = require('sequelize');

const db = {};

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
        dialectOptions:{
            useUTC: false,
            dateString: true,
            typeCast: true
        },
        timezone: '+07:00'
    }
);

db.sequelize = sequelize;
db.Role = require('./role.model')(sequelize);
db.User = require('./user.model')(sequelize);
db.Rescue = require('./rescue.model')(sequelize);
db.RepairShop = require('./repairShop.model')(sequelize);
db.Service = require('./service.model')(sequelize);
db.File = require('./file.model')(sequelize);
db.Address = require('./address.model')(sequelize);
db.Comment = require('./comment.model')(sequelize);
db.UpgradeRequest = require('./upgradeRequest.model')(sequelize);
db.Category = require('./category.model')(sequelize);
db.Appointment = require('./appointment.model')(sequelize);
db.Notification = require('./notification.model')(sequelize);
db.ShopStatistic = require('./shopStatistic.model')(sequelize);
db.Rating = require('./rating.model')(sequelize);

// user - role
db.Role.belongsToMany(db.User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.User.belongsToMany(db.Role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

/// user - rescue
db.User.hasMany(db.Rescue,{
    foreignKey: 'userId'
});
db.Rescue.belongsTo(db.User,{
    foreignKey:'userId'
})
//user - shop
db.User.hasOne(db.RepairShop,{
    foreignKey: 'userId',
});
db.RepairShop.belongsTo(db.User,{
    foreignKey:"userId",
})

// shop - address
db.Address.hasMany(db.RepairShop,{
    foreignKey: 'addressId',
});
db.RepairShop.belongsTo(db.Address,{
    foreignKey:'addressId'
})
// shop - category
db.Category.belongsToMany(db.RepairShop,{
    through: 'shop-categories',
    foreignKey:'catId',
    otherKey:'shopId'
})
db.RepairShop.belongsToMany(db.Category,{
    through:'shop-categories',
    foreignKey:'shopId',
    otherKey:'catId'
})

// rescue - address
db.Address.hasMany(db.Rescue,{
    foreignKey: 'addressId',
});
db.Rescue.belongsTo(db.Address,{
    foreignKey:'addressId',
})

// shop rescue
db.RepairShop.hasMany(db.Rescue,{
    foreignKey:'shopId'
})
db.Rescue.belongsTo(db.RepairShop,{
    foreignKey:'shopId'
})

// shop - service
db.RepairShop.hasMany(db.Service,{
    foreignKey:'shopId',
});
db.Service.belongsTo(db.RepairShop,{
    foreignKey:'shopId',
})

// file - service
db.File.belongsToMany(db.Service,{
    through: 'image_services',
    foreignKey: 'fileId',
    otherKey: 'serviceId'
});
db.Service.belongsToMany(db.File,{
    through: 'image_services',
    foreignKey: 'serviceId',
    otherKey: 'fileId'
});

// category - service
db.Category.belongsToMany(db.Service,{
    through: 'category_services',
    foreignKey: 'categoryId',
    otherKey: 'serviceId'
});
db.Service.belongsToMany(db.Category,{
    through: 'category_services',
    foreignKey: 'serviceId',
    otherKey: 'categoryId'
});
// comment - post
db.Service.hasMany(db.Comment,{
    foreignKey: 'serviceId',
})
// comment - user
db.User.hasMany(db.Comment,{
    foreignKey: 'userId',
})

//Appointment
db.User.hasMany(db.Appointment,{
    foreignKey:'userId'
})
db.Appointment.belongsTo(db.User,{
    foreignKey:'userId'
})

db.RepairShop.hasMany(db.Appointment,{
    foreignKey:'shopId'
})
db.Appointment.belongsTo(db.RepairShop,{
    foreignKey:'shopId'
})

// shopStatistic - shop
db.RepairShop.hasOne(db.ShopStatistic,{
    foreignKey:'shopId'
})
db.ShopStatistic.belongsTo(db.RepairShop,{
    foreignKey:'shopId'
})

// rating - shop
db.RepairShop.hasMany(db.Rating,{
    foreignKey: 'shopId'
})
db.Rating.belongsTo(db.RepairShop,{
    foreignKey:'shopId'
})

// rating - user
db.User.hasMany(db.Rating,{
    foreignKey:'userId'
})
db.Rating.belongsTo(db.User,{
    foreignKey:'userId'
})
module.exports = db;


