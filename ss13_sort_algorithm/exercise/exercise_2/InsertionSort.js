// @ts-ignore
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i]; // Phần tử màu đỏ
        var j = void 0;
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key; // Đưa phần tử màu đỏ vào vị trí phù hợp
    }
}
var b = [2, 7, 8, 9, 1, -5];
insertSort(b);
console.log(b);
