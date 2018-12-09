module.exports = (app) => {

    //Search CI_Item Sage database by itemcode or description -- For use in Results.js component.

    app.get('/api/query/item/:itemCode', (req,res) => {
        const Connection = require('tedious').Connection;
        const Request = require('tedious').Request;
        const keys = require('../config/keys');

        const connection = new Connection(keys.sqlServer);

        connection.on('connect', (err) => {
            if(!err){
                console.log(`Specific Item Query to: (${keys.sqlServer.server}) `)
                executeSpecificItemStatement(req.params.itemCode);
            }else{
            console.log(err)
            }       
        })

        const executeSpecificItemStatement = (itemCode) => {

            const query = 
            `select WarehouseCode,
                    QuantityOnHand-QuantityCommitted AS 'StockAvailable',
                    LotSerialNo
                    from IM_ItemCost
                    WHERE ItemCode LIKE ${itemCode} AND
                    LotSerialNo NOT IN ('10','20','30') AND
                    QuantityOnHand-QuantityCommitted > 0`

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
    })

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
            
            const query = `
            SELECT 
            SalesOrderNo, OrderDate, OrderStatus, 
            CancelReasonCode, BillToName, ShipToAddress1, 
            ShipToAddress2, ShipToCity, ShipToState 
            FROM 
            SO_SalesOrderHeader
            WHERE 
            SalesOrderNo LIKE ${orderNo}`;

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
    
    });
});
//find bin locations for warehouse inventory checks
app.get('/api/query/wh-item/:itemCode', (req,res) => {
    const Connection = require('tedious').Connection;
    const Request = require('tedious').Request;
    const keys = require('../config/keys');

    const connection = new Connection(keys.warehouseServer);

    connection.on('connect', (err) => {
        if(!err){
            console.log(`Specific WH Item Query to: (${keys.warehouseServer.server}) `)
            executeSpecificWHItemStatement(req.params.itemCode);
        }else{
        console.log(err)
        }       
    })

    const executeSpecificWHItemStatement = (itemCode) => {

        const query = 
        `select PRODUCT, BINLABEL, EXTENDED, QUANTITY, PACKSIZE, FROM_BIN, USER_ID, LOCATION
                FROM BINLOCAT
                WHERE PRODUCT LIKE ${itemCode} AND
                BINLABEL NOT LIKE '#%'
                ORDER BY BINLABEL`
        

        
        
        
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
})



};
