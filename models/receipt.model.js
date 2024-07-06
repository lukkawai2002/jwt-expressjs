const mongoose = require('mongoose');

const ReceiptSchema = mongoose.Schema(
    {
        store_location: {
            type: String,
            required: true
        },

        date: {
            type: Date,
            required: true
        },

        time: {
            type: String,
            required: true
        },

        item: {
            type: [String],
            required: true
        },

        payment_method: {
            type: String,
            required: true
        },

        total_amount: {
            type: Number,
            required: true
        }
    },

    {
        timestamps: true,
    }
);

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;