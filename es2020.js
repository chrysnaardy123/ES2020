//Optional Chaining Operator
console.log("Optional Chaining Operator");
const obj = {
  prop1: {
    prop2: {
      prop3: {
        prop4: {
          prop5: 5
        }
      }
    }
  }
}
console.log(obj?.prop1?.prop2?.prop3?.prop4?.prop5);


//Nullish Coalescing Operator
console.log("Nullish Coalescing Operator");
const x = null;
const y = x ?? 500;
console.log(y); // 500
const n = 0
const m = n ?? 9000;
console.log(m) // 0


//BigInt
console.log("BigInt");
const bigInt = BigInt('22222222222222222222222222222222222222222222222222222222222222222222222222222222222');
console.log(bigInt);
const bigHex = BigInt("0x1fffffffffffff111111111");
console.log(bigHex);

//promises.allsettled
console.log("promises.allsettled");
const p1 = new Promise((res, rej) => setTimeout(res, 1000));

const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));