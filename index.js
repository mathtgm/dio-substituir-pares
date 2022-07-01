var listaNumber = [1, 3, 4, 6, 80, 33, 23, 90, 111];

console.log(trocaPar(listaNumber));

function trocaPar(array) {
    if(array.isEmpty) return -1

    for (let index = 0; index < array.length; index++) {
        if(!(array[index] % 2)) {
            array[index] = 0;
        }
    }

    return array;
}