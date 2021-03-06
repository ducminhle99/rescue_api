const db = require('../models/db');
const Category = db.Category;

const getAll = async ()=>{
    const categories = await Category.findAll({
        attributes:['id','catName']
    });
    return categories;
}

const createCategory = async (req)=>{
    const category = await Category.create({
        catName: req.body.catName,
    })
    return category;
}
const updateCategory = async (req)=>{
    const category = await Category.findByPk(req.body.id);
    category.catName = req.body.catName;
    await category.save();
    return category;
}
const deleteCategory = async (req)=>{
    await Category.destroy({
        where: {
            id: req.params.id
        }
    })
}
const getById = async (id) =>{
    const cat = await Category.findByPk(id);
    return cat;
}
module.exports = {
    createCategory,
    getAll,
    updateCategory,
    deleteCategory,
    getById
}