const b1 = 9007199254740991n;
const b2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(typeof b1, typeof b2);
console.log(b1);
console.log(b2);

const hugeString = BigInt("90071992547409915555553334555555555345");
console.log(hugeString);