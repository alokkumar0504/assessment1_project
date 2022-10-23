var fs=require('fs');
var csv=require('fast-csv');
const pool=require('./database');
pool.connect((err)=>{
    if(err){
        console.log(err);
    }
})
    let csvStream = csv.parseFile(".//csv//Sample_Inventory_copy.csv", { headers: true })
    .on("data",(record)=>{
            let code=record.code;
            let name=record.name;
            let batch=record.batch;
            let stock=record.stock;
            let deal=record.deal;
            let free=record.free;
            let mrp=record.mrp;
            let rate=record.rate;
            let exp=record.exp;
            let company=record.company;
            let supplier=record.supplier;
            pool.query("INSERT INTO sampleinventory(code,name,batch,stock,deal,free,mrp,rate,exp,company,supplier) \
            VALUES($1, $2, $3, $4, $5, $6, $7,$8,$9,$10,$11)",[code,name,batch,stock,deal,free,mrp,rate,exp,company,supplier],(err)=>{
                if(err)
                {
                    console.log(err);
                }
            });
    }).on("end", function(){
        console.log("Job is done!");
    }).on("error", function(err){
        console.log(err);
    });




    

    
