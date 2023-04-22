// @ts-ignore
function insertSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Phần tử màu đỏ
        let j;
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key; // Đưa phần tử màu đỏ vào vị trí phù hợp
    }
}

let b: number[] = [2, 7, 8, 9, 1, -5];
insertSort(b);
console.log(b)
