const express = require('express');
const client = require('../database');

exports.getAllsupplier= async(limit,offset) => {
    const q = `Select * from sampleinventory where stock > 0 limit ${limit} offset ${offset} `;
    const result = await client.query(q);
      return result.rows;
}

exports.productCategory=async(name,limit,offset)=>{
    const q=`SELECT * FROM  public.sampleinventory
	WHERE name='${name}'limit ${limit} offset ${offset} ;`
    const resultset = await client.query(q);
    return  resultset.rows;
}

exports.expirydateCategory=async(name,limit,offset)=>{
    let currentdate=Date.now();
    const q=`SELECT * FROM  public.sampleinventory
	WHERE name='${name}' and exp>'${currentdate}' limit ${limit} offset ${offset} ;`
    const resultset = await client.query(q);
    return  resultset.rows;
}

