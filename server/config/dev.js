module.exports = {
    sqlServer: {
        server: "10.0.0.16",
        userName: 'erp',
        password: 'Th5PreveVeBr',
        options: {
            database: "MAS_AKD",
            rowCollectionOnDone: true
        }
        
    },
    warehouseServer: {
        server: "10.0.0.16",
        userName: 'erp',
        password: 'Th5PreveVeBr',
        options: {
            database: 'A1Warehouse',
            rowCollectionOnDone: true
        }
    },
    authDB: {
        mongoURI: 'mongodb://admin:akdo3445@ds123664.mlab.com:23664/toolbox',
        cookieKey: '$4zSmMJO&eMW!HL'
    }


}