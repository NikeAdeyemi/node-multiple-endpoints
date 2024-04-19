exports.createUser = (req, res) => {
    res.status(200)
    res.json({
        message: 'User created successfully...'
    })
}


exports.allUsers = (req, res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            name: 'Ryan Luis',
            age: 20,
            gender: 'male',
            phone: 5566554545

        },
        {
            id: 2,
            name: 'Sebastine Llyod',
            age: 30,
            gender: 'male',
            phone: 55665887545

        },
        {
            id: 3,
            name: 'Nikky Starry',
            age: 26,
            gender: 'female',
            phone: 3344331122

        }
    ])
}

exports.getSingleUser = (req, res) => {
    res.status(200)
    res.json({
            id: 3,
            name: 'Nikky Starry',
            age: 26,
            gender: 'female',
            phone: 3344331122
    })
}

exports.deleteUser = (req, res) => {
    res.status(200)
    res.json({
        message: 'User deleted successfully...'
    })
}

exports.updateUser = (req,res) => {
    res.status(200)
    res.json({
        message: 'User updated successfully...'
    })
}