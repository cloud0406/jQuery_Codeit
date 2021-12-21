// * undefined 와 null
// null은 비어있는 값이고, undefined는 변수에 아무것도 할당되지 않았을 때의 값
// 자바스크립트는 변수의 선언과 초기화를 동시에 하지 않아도 됨 -> 선언만 된 변수 : undefined값을 가짐

let n = null;
let u;

console.log(n);
console.log(u);


// NaN(Not a Number) : 숫자가 아닌 것을 숫자로 표현할 때 반환

let k = parseInt('abcd');
console.log(k);


// if문 조건 부분 활용

// 0은 false , 이외의 숫자는 true로 간주됨
if (0) {
  console.log('0은 true');
} else {
  console.log('0은 false');
}

if (4) {
  console.log('양수는 true');
} else {
  console.log('양수는 false');
}

if (-10) {
  console.log('음수는 true');
} else {
  console.log('음수는 false');
}

// 비어있는 문자열은 false , 채워져 있는 문자열은 true
if ('') {
  console.log('비어있는 문자열은 true');
} else {
  console.log('비어있는 문자열은 false');
}

if ('ab') {
  console.log('안 비어있는 문자열은 true');
} else {
  console.log('안 비어있는 문자열은 false');
}

// null, undefined, NaN은 모두 false로 간주
if (null) {
  console.log('null은 true');
} else {
  console.log('null은 false');
}

if (undefined) {
  console.log('undefined는 true');
} else {
  console.log('undefined는 false');
}

if (NaN) {
  console.log('NaN은 true');
} else {
  console.log('NaN은 false');
}


// if문에 문자열 활용
let str = '';
let str2 = 'abcd';

if (str) {
  console.log('str은 빈 문자열이 아닙니다.');
} else {
  console.log('str은 빈 문자열입니다.');
}

if (str2) {
  console.log('str2은 빈 문자열이 아닙니다.');
} else {
  console.log('str2은 빈 문자열입니다.');
}



// 다른 자료형 불린으로 변형하기

let str3 = '';  // 비어있는 문자열 불린값으로는 false 처리
console.log(!str3);
console.log(!!str3);