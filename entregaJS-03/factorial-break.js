// Factorial con bucle while, una bifurcacion if y sentencia break

let x = 10;
let i = x - 1;

while (x) {
	x *= i;
	console.log(x);
	i--;
	console.log(i);
	if (i <= 1) break;
}
console.log(x);
