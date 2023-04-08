function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += fibonacci(i);
}

console.log(sum);
