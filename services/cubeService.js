const Accessory = require('../models/Accessory')
const Cube = require('../models/Cube')



async function getAll(search, from, to) {
    // from = Number(from) || Number.MIN_SAFE_INTEGER;
    // to = Number(to) || Number.MAX_SAFE_INTEGER;
    // search = search || ""

    // const output = data
    //     .filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || '')
    //     .filter(c => c.difficulty >= from && c.difficulty <= to)
    // return output.length > 0 ? output : data
    // const allCubes = await Cube.find({}).lean()
    // console.log(allCubes);
    // return allCubes;
    return Cube.find({}).lean()

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


