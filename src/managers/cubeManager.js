const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
 
    const newCube = {
        id: (new Date()).getTime(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}; 