const uniqid = require('uniqid');
const cubes = [
    {
        id: 'testId1',
        name: 'Mirror Cube',
        description: 'A cool cube',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0270/0342/0758/files/1202977061844295.QAOySrnyE0B5cIfqTxz5_height640_480x480.png?v=1663142818',
        difficultyLevel: 5
    }, 
    {
        id: 'testId2',
        name: 'Rubik Classic',
        description: 'A cool rubik cube',
        imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61fB-s4DPVS._AC_UF1000,1000_QL80_.jpg',
        difficultyLevel: 4
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
 
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}; 