var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
function matrixElementsSum(matrix) {
    var sum = matrix[0].reduce(function (a, b) { return a + b; }, 0);
    for (var i = 1; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i - 1][j] != 0) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
console.log(matrixElementsSum(matrix));
