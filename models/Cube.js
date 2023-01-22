const { Schema, model, Types } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, max: 100 },
    imgUrl: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: Types.ObjectId, ref: 'Accessory'
        }
    ]
});

cubeSchema.path('imgUrl').validate(function () {
    return this.imgUrl.startsWith('http');
}, 'Image url should be a link');


const Cube = model('Cube', cubeSchema);

module.exports = Cube

