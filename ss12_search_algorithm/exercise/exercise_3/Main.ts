let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

function matrixElementsSum(matrix: number[][]): number {
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i - 1][j] != 0) {
                sum += matrix[i][j];
            }
        }
    }

    return sum;
}

console.log(matrixElementsSum(matrix));
