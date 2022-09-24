const { rejects } = require('assert');
const fs = require('fs');
const fileName = './data.json';
const data = JSON.parse(fs.readFileSync(fileName));


async function persist() {
    return new Promise((req, res) => {
        fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
            if (err == null) {
                res()
            } else {
                rejects(err)
            }
        })
    })
}

function getAll() {
    return data;
}


module.exports ={
    getAll
}


