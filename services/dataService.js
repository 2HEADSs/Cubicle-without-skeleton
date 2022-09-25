const fs = require('fs');
const fileName = './data.json';
const data = JSON.parse(fs.readFileSync(fileName));


async function persist() {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
            if (err == null) {
                res()
            } else {
                rej(err)
            }
        })
    })
}



function getAll(search, from, to) {
    from = Number(from) || Number.MIN_SAFE_INTEGER;
    to = Number(to) || Number.MAX_SAFE_INTEGER;
    search = search || ""
    console.log(`FROM ${from}`);
    console.log(`TO ${to}`);

    const output = data
        .filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || '')
        .filter(c => c.difficulty >= from && c.difficulty <= to)
    console.log(output);
    return output

}

function getById(id) {
    return data.find(i => i.id == id)
}


async function create(cubicData) {
    const cube = {
        id: getId(),
        name: cubicData.name,
        difficulty: Number(cubicData.difficulty),
        imgUrl: cubicData.imgUrl,
        description: cubicData.description,

    }
    data.push(cube);
    await persist();
    return cube;

}

function getId() {
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6);
}

module.exports = {
    getAll,
    getById,
    create
}


