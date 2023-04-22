// @ts-ignore
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i]; // Phần tử màu đỏ
        console.log("Lưu phần tử key = " + key);
        var j = void 0;
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            console.log("Dịch chuyển " + arr[j] + " xuống " + arr[j + 1]);
            arr[j + 1] = arr[j];
        }
        console.log("Gán phần tử key cho " + arr[j + 1]);
        arr[j + 1] = key; // Đưa phần tử màu đỏ vào vị trí phù hợp
        console.log("M\u1EA3ng sau khi th\u1EF1c hi\u1EC7n xong b\u01B0\u1EDBc ".concat(i, " l\u00E0: ").concat(arr));
    }
}
var a = [2, 7, 8, 9, 1, -5];
insertSort(a);
console.log(a);
