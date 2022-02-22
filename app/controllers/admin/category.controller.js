const categoryService = require('../../services/category.service');

exports.createCategory = (req, res, next) => {
    categoryService.createCategory(req).then(category => {
        res.status(200).json(category)
    }).catch(next)
}
exports.getAll = (req, res, next) => {
    categoryService.getAll().then(categories => {
        res.status(200).json(categories)
    }).catch(next)
}
exports.updateCategory = (req, res, next) => {
    categoryService.updateCategory(req).then(category => {
        res.status(200).json(category)
    }).catch(next)
}
exports.deleteCategory = (req, res, next) => {
    categoryService.deleteCategory(req).then(() => {
        res.status(200).json('delete category ok')
    }).catch(next)
}

