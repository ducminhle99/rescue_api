const db = require('../models/db');
const User = db.User;
const Role = db.Role;
const ReairShop = db.RepairShop;
const UpgradeRequest = db.UpgradeRequest;

const PaginationHelper = require('../helpers/paginationHelper')
const fileService = require('./file.service');
const {use} = require("express/lib/router");
const getById = async (id) => {
    const user = await getUser(id);
    return user;
}
const getCurrentUser = async (req) =>{
    const currenUserId = req.userId;
    const user = await  getUser(currenUserId);
    return user;
}

const getAll = async (req) => {
    const { limit, offset, page } = PaginationHelper.getPagination(req);
    const userList =  await User.findAndCountAll({
        attributes: ['id','fullName','email','imageUrl','phone'],
        limit: limit,
        offset: offset
    });
    return PaginationHelper.getPagingData(userList,page,limit)
}
const getAllAdmin = async () =>{
    const list = await User.findAll({
        attributes: ['id','fullName','email','imageUrl','phone'],
        include: Role
    })
    return list;
}


const updateUser = async (req) => {
    const userChange = req.body;
    const user = await getUser(req.userId);
    console.log(user);
    Object.assign(user, userChange);
    await user.save();
    return user;
}

const updateAvatar = async (req) => {
    const user = await getUser(req.userId);
    const {path} = await fileService.uploadFile(req);
    user.imageUrl = path;
    await user.save();
}

const updateUserRole = async (req) =>{
    const user = await getUser(req.body.userId);
    const roles = req.body.roles;
    user.setRoles(roles);
    await user.save();
    return 'ok';
}

const upgradeUser = async (req) => {
    await UpgradeRequest.create({
        userId: req.userId,
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        phone: req.body.phone
    })
}

//helper functions
const getUser = async (id) => {
    const user = await User.findByPk(id,{
        attributes: ['id','fullName','email','imageUrl','phone'],
        include : ReairShop
    });
    if (!user) throw 'user not found';
    return user;
}
const getShopByUser = async (req) =>{
    const id = req.userId;
    const user = await User.findByPk(id,{
        attributes:['id','fullName','email','imageUrl','phone'],
        include : ReairShop
    });
    if (!user) throw 'user not found';
    return user;
}
const deleteUser =async (id) => {
    console.log('delete user by id', id)
  const user = await User.findByPk(id);
  await user.destroy();
  return 'ok';
}
module.exports = {
    getById,
    getAll,
    updateUser,
    updateAvatar,
    getUser,
    updateUserRole,
    upgradeUser,
    getCurrentUser,
    getShopByUser,
    getAllAdmin,
    deleteUser
}
