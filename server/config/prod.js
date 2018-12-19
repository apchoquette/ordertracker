module.exports = {
    sqlServer: {
        server: process.env.SAGE_SERVER_IP,
        userName: process.env.SAGE_SERVER_USERNAME,
        password: process.env.SAGE_SERVER_PASSWORD,
        options: {
            database: process.env.SAGE_SERVER_DATABASE,
            rowCollectionOnDone: true
        }
        
    },
    warehouseServer: {
        server: process.env.SAGE_SERVER_IP,
        userName: process.env.SAGE_SERVER_USERNAME,
        password: process.env.SAGE_SERVER_PASSWORD,
        options: {
            database: process.env.WMS_SERVER_DATABASE,
            rowCollectionOnDone: true
        }
    },
    authDB: {
        mongoURI: process.env.MONGO_URI,
        cookieKey: process.env.COOKIE_KEY
    }


}