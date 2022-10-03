const { Schema, model, Types } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, max: 100 },
    imgUrl: {
        type: String, required: true, validate: {
            validator: /^https?/g,
            message: 'Image should be a link'
        }
    },
    difficultyLevel: { type: Number, required: true, min: 1, max: 6 },
    //TODO ref to accesory
});

// cubeSchema.path('imgUrl').validate(function () {
//     return this.imgUrl.startsWith('http')
// }, 'Imahe URL should be a link!')

const Cube = model('Cube', cubeSchema);

module.exports = Cube

