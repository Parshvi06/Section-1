const nums = [1, 4, 16, 63, 36, 52, 18, 17, 81];
const perfect = [];
for (let i of nums) {
    if (Number.isInteger(i ** 0.5)) {
        // console.log(i);
        perfect.push(i);
    }
}
console.log(perfect);

console.log('----');

const prices = [100, 210, 280, 399, 550]
const discount = []

for (let p of prices) {
    discount.push(p * 0.9)


}
console.log(discount);

console.log('-----');

const discountedPrices = prices.map((p) => { return p * 0.9 });
console.log(discountedPrices);

console.log('-----');

const prfct = nums.map((i) => { return i * i });
console.log(prfct);


console.log('-----');

const perfectNums = nums.filter((n) => { return Number.isInteger(n ** 0.5) })
console.log(perfectNums);

console.log('-----');

const prices2 = ['₹423.23','₹123.452','₹678.9','₹999.9982']
const intPrice = prices2.map((j) => { return parseInt(j.slice(1)) })
console.log(intPrice);

console.log('-----');

const names = ['ramu', 'shamu', 'pinki', 'kaliya']
const n2 = names.filter((f)=>{return (f.length>=5)})
console.log(n2);

console.log('-----');

const nnn = ['ramu', 'shamu', 'pinki', 'kaliya']
const str= nnn.map((k)=>{return (k.toUpperCase())})
console.log(str);


