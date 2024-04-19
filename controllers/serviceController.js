exports.allServices = (req, res) => {
    res.status(200)
    res.json([
        {
            
            serviceName: 'Frontend development',
            Duration: "6 months",
            Amount: '$250'
        },
        {
            serviceName: 'Backend development',
            Duration: "6 months",
            Amount: '$250'
        },
        {
            serviceName: 'Fullstack development',
            Duration: "10 months",
            Amount: '$450'
        },
        {
            serviceName: 'UI UX',
            Duration: "6 months",
            Amount: '$190'
        },
        {
            serviceName: 'Product Management',
            Duration: "6 months",
            Amount: '$200'
        }
    ])
}

exports.getSingleService = (req, res) => {
    res.status(200)
    res.json({
        serviceName: 'Product Management',
        Amount: '$200'
    })
}

exports.deleteService = (req, res) => {
    res.status(200)
    res.json({
        message: 'Service deleted successfully...'
    })
}

exports.updateService = (req,res) => {
    res.status(200)
    res.json({
        message: 'Service updated successfully...'
    })
}