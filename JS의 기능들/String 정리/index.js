// 문자열의 길이 : length
let str = 'Codeit';
console.log(str.length);

console.log('');

// 특정 인덱스의 문자 받아오기 : charAt(index) 
let str2 = 'Codeit';
console.log(str2.charAt(2));

console.log('');

// 문자열 안에서 다른 문자열 검색 : indexOf(searchValue) -> 위치하는 인덱스 리턴
let str3 = 'Hello World!';

console.log(str3.indexOf('e'));
console.log(str3.indexOf('z')); // 없으면 -1 리턴
console.log(str3.indexOf('ello')); // 시작 부분인 'e' 즉 1 리턴
console.log(str3.indexOf('o'));

console.log('');

// 마지막 인덱스 찾기 : lastIndexOf -> indexOf(searchValue)를 뒤에서 부터 실행
let str4 = 'Hello World!';

console.log(str4.indexOf('o'));
console.log(str4.lastIndexOf('o'));

console.log('');

// 대소문자 변환
let str5 = 'Codeit';
console.log(str5.toUpperCase()); // 대문자
console.log(str5.toLowerCase()); // 소문자

console.log('');

// 문자열 자르기 : str.substring(indexStart, indexEnd) , str.substr(start, length)
let str6 = 'Hello World!';

console.log(str6.substring(2, 5)); // 시작 지점과 끝 지점으로 자르기 : 시작 인덱스 ~ 끝 인덱스
console.log(str6.substring(2));

console.log(str6.substr(2, 5)); // 시작 지점과 길이로 자르기 : 시작 인덱스부터 해당 길이만큼

console.log('');

// 앞뒤의 공백을 없애기 : str.trim() -> 공백(띄어쓰기, 들여쓰기, 줄바꿈) 모두 지움
let str7 = '        Hello World!      ';

console.log(str7.trim());



