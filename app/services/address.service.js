const db = require('../models/db');
const Address = db.Address;
const createAddress = async (addressReq)=>{
    const address = await Address.build({
        latitude: addressReq.latitude,
        longitude: addressReq.longitude,
    })
    if(addressReq.name) address.name = addressReq.name;
    await address.save();
    return address;
}
const getById = async (id)=>{
    const address = await Address.findByPk(id)
    return address;
}
module.exports ={
    createAddress,
    getById
}