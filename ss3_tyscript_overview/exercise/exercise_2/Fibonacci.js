function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var n = 10;
var sum = 0;
for (var i = 1; i <= n; i++) {
    sum += fibonacci(i);
}
console.log(sum);
