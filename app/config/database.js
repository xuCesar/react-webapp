const config = {
  "development": {
      "username": "postgres",
      "password": "123456",
      "database": "react-webapp",
      "host": "127.0.0.1",
      "port": 5432,
      "dialect": "postgres",
      define: {
          //prevent sequelize from pluralizing table names
          freezeTableName: true
      }
  },
  "production": {
    "username": "postgres",
    "password": "123456",
    "database": "react-weapp",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres",
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
  }
};

module.exports = config;
