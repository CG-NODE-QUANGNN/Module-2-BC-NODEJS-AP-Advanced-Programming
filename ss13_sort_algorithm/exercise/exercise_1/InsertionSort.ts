// @ts-ignore
function insertSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Phần tử màu đỏ
        console.log("Lưu phần tử key = " + key)
        let j;
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            console.log("Dịch chuyển " + arr[j] + " xuống " + arr[j + 1]);
            arr[j + 1] = arr[j];
        }
        console.log("Gán phần tử key cho " + arr[j + 1])
        arr[j + 1] = key; // Đưa phần tử màu đỏ vào vị trí phù hợp

        console.log(`Mảng sau khi thực hiện xong bước ${i} là: ${arr}`);
    }
}

let a: number[] = [2, 7, 8, 9, 1, -5];
insertSort(a);
console.log(a)
