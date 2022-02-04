const Category = require('../models/category.model')

exports.createCategory = (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let image = req.file.path
    console.log(title, description, image)
    const category = new Category({
        title,
        description,
        image
    })
    category.save((err, category) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Created category successfully",
            category
        })
    })

}