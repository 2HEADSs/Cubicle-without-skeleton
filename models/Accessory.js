const { Schema, model, Types } = require('mongoose');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    imgUrl: {
        type: String, required: true, validate: {
            validator: /^https?/g,
            message: 'Image should be a link'
        }
    },
    description: { type: String, required: true },
    cubes: [{ type: Types.ObjectId, ref: 'Cube' }]
});


const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory


