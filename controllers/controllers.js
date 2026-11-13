
exports.getALLcategories = (req, res) => {
    res.status(200).json({
        status: "success",
        data: [
            {
                id: 1,
                name: "Appetizers"
            },
            {
                id: 2,
                name: "Main Course"
            }
        ]
    });
};

// STORE CATEGORY
exports.storeCategory = (req, res) => {
    let name = req.body.name;
    let description = req.body.description;

    // Validasi data
    if (!name || !description) {
        return res.status(400).json({
            status: "failed",
            message: "Name and description are required"
        });
    }

    return res.status(201).json({
        status: "success",
        message: "Category created successfully",
        data: {
            name: name,
            description: description
        }
    });
};
