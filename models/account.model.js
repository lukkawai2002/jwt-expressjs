const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        admin: {
            type: Boolean,
            default: false,
            required: true
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('Account', AccountSchema);