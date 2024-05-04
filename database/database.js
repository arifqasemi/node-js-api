const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('u958331791_nodeApi','u958331791_nodeAPIBD','Indonesia12345@',{
    dialect:'mysql',
    host:'191.101.230.1'
    
})

module.exports = sequelize