export function splitArrayRoundRobin(array:object[]) {
    let array1 = [];
    let array2 = [];
    let array3 = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
            array1.push(array[i]);
        } else if (i % 3 === 1) {
            array2.push(array[i]);
        } else {
            array3.push(array[i]);
        }
    }
    return [array1, array2, array3];
}
 