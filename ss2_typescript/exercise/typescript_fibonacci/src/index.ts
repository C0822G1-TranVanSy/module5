function isFibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return isFibonacci(n - 1) + isFibonacci(n - 2);

}

// @ts-ignore
let number: number = +prompt("Nhập số nào đó: ");
let sum: number = 0;
for (let i = 0; i < number; i++) {
    console.log(isFibonacci(i));
    sum += isFibonacci(i);
}
console.log(`Tổng các số fibonacci là: ${sum}`);
