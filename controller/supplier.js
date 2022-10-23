const { userInfo } = require('os');
const { connected } = require('process');
const client = require('../database');
const SupplierService = require('../Service/supplier');

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };


exports.getAllsupplier= async (req, res) => {
    try {
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);
        const data = await SupplierService.getAllsupplier(limit,offset);
        res.json(data);
    } catch (error) {
        console.log(error);
    }

}

exports.productCategory=async(req,res)=>{
    const name=req.params.name;
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    const productcatogory=await SupplierService.productCategory(name,limit,offset);
    res.send(productcatogory);
  }
  exports.expirydateCategory=async(req,res)=>{
    const name=req.params.name;
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);
    const expirydate=req.query.expirydate;
    const expirydateCategory=await SupplierService.expirydateCategory(name,expirydate,limit,offset);
    res.send(expirydateCategory);
  }



