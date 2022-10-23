const express = require('express');
const client = require('../database');
const repo = require('../repository/supplier');

exports.getAllsupplier= async (limit,offset) =>{
    const data = await repo.getAllsupplier(limit,offset);
    return data;
}
exports.productCategory=async(body)=> {
    const productCategory=await repo.productCategory(body);
    return productCategory;

}
exports.expirydateCategory=async(body)=> {
    const expirydateCategory=await repo.expirydateCategory(body);
    return expirydateCategory;
}