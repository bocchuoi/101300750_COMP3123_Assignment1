const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 100,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    },    
    password: {
        type: String,
        required: true,
        maxLength: 50
    }  
})

const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
    },    
    email: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    },  
    gender: {
        type: String,
        required: true,
        maxLength: 25,
        validate: (val) => {
            return ["male", "female", "other"].includes(val.toLowerCase())
        }
    },  
    salary: {
        type: Number,
        required: true,
        min: 0
    }  
})

// Field Name Type Constraint
// _id Object ID Auto Generate
// username String (100) Primary Key
// email String (50) Unique
// password String (50) May be encrypted with other fields
// User can login using username/email and password
// Employee Collection
// Field Name Type Constraint
// _id Object ID Auto Generate
// first_name String (100) Required
// last_name String (50) Required
// email String(50) Unique
// gender String (25) Male/Female/Other
// salary Float Required