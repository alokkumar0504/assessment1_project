var express = require('express');
var router = express.Router();
const suppliercontroller = require('../controller/supplier');
const csvController=require('../importcsv');
router.get('/',suppliercontroller.getAllsupplier);
router.get('/:name',suppliercontroller.productCategory);
router.get('/:name/expirydate',suppliercontroller.expirydateCategory);
module.exports=router;