function countOccurrences(numbers: number[], value: number): number {
    return numbers.filter(item => item === value).length;
}

const num: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
console.log(countOccurrences(num, 5))
