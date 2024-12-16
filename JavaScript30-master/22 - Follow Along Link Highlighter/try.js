const test = [12, 22, 34, 55];

function sumofbitch(arr) {
    const result = [];
    for (const num of arr) {
        let sum = 0;
        for (const digits of num.toString()) {
            sum += Number(digits);
        }
        result.push(sum);
    }
    return result;
}

console.log(result);
