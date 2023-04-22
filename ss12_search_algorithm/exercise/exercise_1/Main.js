function countOccurrences(numbers, value) {
    return numbers.filter(function (item) { return item === value; }).length;
}
var num = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
console.log(countOccurrences(num, 5));
