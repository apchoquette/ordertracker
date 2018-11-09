

// require('../services/tediousSQLConnection');
module.exports = (app) => {

    app.get('/api/query/:itemCode', (req,res) => {
        const Connection = require('tedious').Connection;
        const Request = require('tedious').Request;
        const keys = require('../config/keys');

        const connection = new Connection(keys.sqlServer);

        connection.on('connect', (err) => {
            if(!err){
                console.log(`Connection to SQL Server (${keys.sqlServer.server}) successful.`)
                executeStatement(req.params.itemCode);
            }else{
            console.log(err)
            }       
        })

        

        

    const executeStatement = (itemCode) => {
        const query = `select CI_Item.ItemCode, CI_Item.ItemcodeDesc, CI_Item.TotalQuantityOnHand, CI_item.StandardUnitPrice, CI_Item.SuggestedRetailPrice from CI_Item WHERE ItemCode = ${itemCode}`;
        let request = new Request(query, (err,rowCount) => {
            if (err) {
                console.log(err);
            } else {        
                console.log(rowCount + ' rows');
            }
        });
        request.on('row', function(columns) {

            let resultsArr = []
            columns.forEach(function(column) {
                resultsArr.push(column.value);
                });
            res.send(resultsArr);
        });
              
    connection.execSql(request);
            
                
    
}
       
    })
}
