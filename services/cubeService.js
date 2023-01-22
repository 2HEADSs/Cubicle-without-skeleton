const Accessory = require('../models/Accessory')
const Cube = require('../models/Cube')



async function getAll(search = "", from, to) {
    console.log(search, from, to);
    let cubes = await Cube.find({}).lean()
    from = Number(from) || 0;
    to = Number(to) || 6;
    const output = cubes
        .filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || '')
        .filter(c => c.difficultyLevel >= from && c.difficultyLevel <= to)

    return output;

}

function getById(id) {
    return  Cube.findById(id).populate('accessories').lean()
}


async function create(cubicData) {
    const cube = {
        name: cubicData.name,
        description: cubicData.description,
        // difficultyLevel: Number(cubicData.difficulty),
        difficultyLevel: cubicData.difficultyLevel,
        imgUrl: cubicData.imgUrl,
    }
    const result = await Cube.create(cube)
}

async function attachAccessory(cubeId, accessoryId) {

    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId)
    cube.accessories.push(accessory)
    accessory.cubes.push(cube)

    await cube.save();
    await accessory.save()
}

module.exports = {
    getAll,
    getById,
    create,
    attachAccessory
}


