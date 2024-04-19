exports.allProducts = (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "Apple airpod max",
            productPrice: "$900",
            waranty: "1 year"
        },
        {
            productName: "Apple iwatch series 8",
            productPrice: "$1100",
            waranty: "1 year"
        },
        {
            productName: "Apple airTag",
            productPrice: "$50",
            waranty: "1 year"
        },
        {
            productName: "Apple Macbook pro",
            productPrice: "$2200",
            waranty: "2 year"
        }
    ])
}

exports.createProduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'product created successfully...'
    })
}

exports.getSingleProduct = (req, res) => {
    res.status(200)
    res.json({
        productName: "Apple Macbook pro",
        productPrice: "$2200",
        waranty: "2 year"
    })
}

exports.updateProduct = (req,res) => {
    res.status(200)
    res.json({
        message: 'Product updated successfully...'
    })
}

exports.deleteProduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'Product deleted successfully...'
    })
}