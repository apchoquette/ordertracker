module.exports = (app) => {

    //Search CI_Item Sage database by itemcode or description -- For use in Results.js component.

    app.get('/api/query/:itemCode', (req,res) => {
        const Connection = require('tedious').Connection;
        const Request = require('tedious').Request;
        const keys = require('../config/keys');

        const connection = new Connection(keys.sqlServer);

        connection.on('connect', (err) => {
            if(!err){
                console.log(`ItemCode Query to: (${keys.sqlServer.server}) `)
                executeItemCodeStatement(req.params.itemCode);
            }else{
            console.log(err)
            }       
        })
        
    const executeItemCodeStatement = (itemCode) => {

        const query = itemCode.match(/^'%[a-zA-Z]{2}\d{4}/)  
        ? 
        `select CI_Item.ItemCode, 
                CI_Item.ItemcodeDesc, 
                CI_Item.TotalQuantityOnHand, 
                CI_Item.UDF_SQFT_STANDARD_PRICE,
                CI_Item.UDF_SQFT_RETAIL_PRICE,
                CI_Item.UDF_STATUSBRI,
                CI_ITEM.UDF_STATUSPAC
                from CI_Item 
                WHERE ItemCode LIKE ${itemCode} AND
                ItemCode NOT LIKE 'CUSTOM%' AND
                ItemCode NOT LIKE 'MK%' AND
                ItemCode NOT LIKE 'XX%'`
        :
        `select CI_Item.ItemCode, 
                CI_Item.ItemcodeDesc, 
                CI_Item.TotalQuantityOnHand, 
                CI_Item.UDF_SQFT_STANDARD_PRICE,
                CI_Item.UDF_SQFT_RETAIL_PRICE,
                CI_Item.UDF_STATUSBRI,
                CI_ITEM.UDF_STATUSPAC
                from CI_Item 
                WHERE ItemCodeDesc LIKE ${itemCode} AND
                ItemCode NOT LIKE 'CUSTOM%' AND
                ItemCode NOT LIKE 'MK%' AND
                ItemCode NOT LIKE 'XX%'`

        
        
        
        let request = new Request(query, (err,rowCount,rows) => {
            if (err) {
                console.log(err);
            }else {
                console.log('rows returned: ', rowCount);  
            }

        }).on('doneInProc',(rowCount, more, rows) => {
            //Once query runs, check if rows are returned and return an object with all data.
            if(rowCount>0){
                let rowsArray = [];

                rows.forEach(function(columns) {

                let rowArray = new Object();
                columns.forEach(function(column){
                    rowArray[column.metadata.colName] = column.value
                })  
                rowsArray.push(rowArray);
                })
                    
                    
                
                res.send(rowsArray);

            }else {
                res.send([]);
            }
            
                
            });
        connection.execSql(request);
        }

    //GET ORDER STATUS BY ORDER NUMBER

    app.get('/api/query/orderStatus/:orderNo', (req,res) => {
        const Connection = require('tedious').Connection;
        const Request = require('tedious').Request;
        const keys = require('../config/keys');

        const connection = new Connection(keys.sqlServer);

        connection.on('connect', (err) => {
            if(!err){
                console.log(`Connection to SQL Server (${keys.sqlServer.server}) successful.`)
                executeOrderStatusStatement(req.params.orderNo);
            }else{
            console.log(err)
            }       
        })
    
        

        

    const executeOrderStatusStatement = (orderNo) => {
        
        const query = `select SO_SalesOrderHeader.OrderType, 
        SO_SalesOrderHeader.OrderStatus, 
        SO_SalesOrderHeader.ShipToAddress, 
        SO_SalesOrderHeader.ShipVia FROM SO_SalesOrderHeader where OrderNo=${orderNo}`;
        let request = new Request(query, (err,rowCount) => {
            if (err) {
                console.log(err);

            }else if(rowCount < 1){
                res.send([0,0,0,0,0])
            }
            
            else {        
                console.log(rowCount + ' rows');
            }
            connection.close();

        });
        request.on('row', function(columns) {

            let resultsArr = []

            
                columns.forEach(function(column) {
                    resultsArr.push(column.value)
                })

                res.send(resultsArr);
            } 
        );
       
              
        connection.execSql(request);
            
                
    
}})})}
