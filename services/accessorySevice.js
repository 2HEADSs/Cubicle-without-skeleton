const Accessory = require('../models/Accessory')



async function getAll(search, from, to) {
    return  Accessory.find({}).lean()

}

function getById(id) {
    return Accessory.findById(id)
}


async function create(accessory) {
    console.log(`services-> Accessory-> create ${accessory}`);
    const accessor = {
        name: accessory.name,
        description: accessory.description,
        imgUrl: accessory.imgUrl,
    }

    const result = await Accessory.create(accessor)


}



module.exports = {
    getAll,
    getById,
    create
}


