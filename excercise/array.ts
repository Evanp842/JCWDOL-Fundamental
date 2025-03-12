const arr: string[] = ["12","5","23","18","4","45","32"];
const arr2: string[] = new Array("12","5","23","18","4","45","32");

console.log(arr);
console.log(arr2);

console.log(arr[2])

const numArr: number[] = [4, 5, 12, 18, 23, 32, 45];

numArr.sort((a, b) => a - b);
console.log(numArr);