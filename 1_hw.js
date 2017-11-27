//1
function fizzbuzz(n) {
    for (let i = 1; i != n + 1; ++i) {
        if (i % 3 == 0 & i % 5 != 0) {
            console.log("fizz");
        } else if (i % 3 != 0 & i % 5 == 0) {
            console.log("buzz");
        } else if (i % 15 == 0) {
            console.log("fizzbuzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(20);

//2
const doubles = x => 2 * x;
const array = [0, 1, 2, 3, 4, 6, 6, 10];

console.log(array.map(doubles)); // take a function

array.forEach((item, i) => {
  console.log(array.map(doubles), item);
});

for (let i = 0; i != array.length; i++) {
  console.log(array[i],' ', i);
}

console.log(array.filter(x => x > 3)); // take a bool operation
console.log(array.some(x => x % 4 == 0));
console.log(array.every(x => x + 1 > 1));

let total = 0;
array.forEach(x => {total += x;});
console.log(total);

mapFor([1,2,3], x => x + 2);

//3
function mean(array) {
    const counter = array.reduce((acc, x) => {
        return acc + x;
    }, 0);
    return (counter / array.length);
}
