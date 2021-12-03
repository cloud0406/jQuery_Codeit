// lenght : 배열의 길이
let brands = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands.length);

console.log('');

// indexOf : 문자열에서처럼 똑같이 동작 -> array.indexOf(item) : array에 item이 포함되어 있는지 확인
let brands2 = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands2.indexOf('Starbucks')); // 해당 인덱스 리턴
console.log(brands2.indexOf('Kakao')); // 없으면 -1 리턴

console.log('');

// push : array.push(item1) -> item1이 array 배열의 끝에 추가
let brands3 = ['Apple', 'Coca-Cola', 'Starbucks'];

brands3.push('Kakao');
console.log(brands3);

brands3.push('Samsung', 'LG', 'Facebook');
console.log(brands3);

console.log('');

// pop : array.pop() -> 배열 array의 마지막 요소가 배열에서 빠지고, 그 마지막 요소가 리턴
let brands4 = ['Apple', 'Coca-Cola', 'Starbucks'];

let lastBrand = brands4.pop();

console.log(lastBrand);
console.log(brands4);

console.log('');

// join : 배열의 모든 내용을 하나로 합침
let brands5 = ['Apple', 'Coca-Cola', 'Starbucks'];
console.log(brands5.join());
console.log(brands5.join('###')); // 쉼표가 아닌 괄호안에 파라미터로 문자 대체 가능