// Date 객체 : 날짜와 관련된 프로그램 짤 때 사용

// 현재 날짜 설정 : 파라미터 없이 new Date() -> 현재 날짜로 설정되어 있는 Date객체 생성
let date = new Date();

// 원하는 날짜 설정 : 파라미터를 사용하여 new Date(' ')

// 1988년 6월 11일 5시 25분 30초
let date1 = new Date('June 11, 1988 05:25:30');
let date2 = new Date('1988-06-11T05:25:30');

// 1999년 12월 15일 (날짜만) : 날짜만 사용하면 0시 0분 0초로 지정됨
let date3 = new Date('1999-12-15');
let date4 = new Date('12/15/1999');
let date5 = new Date('December 15 1999');
let date6 = new Date('Dec 15 1999');


// 날짜 정보 받기
date = new Date('June 11, 1988 05:25:30');

console.log(date.getFullYear()); // 년도
console.log(date.getMonth()); // 월 (0부터 1월 -> 즉, 5는 6월을 가리킴)
console.log(date.getDate()); // 일
console.log(date.getDay());  // 요일 (0부터 일요일 -> 즉, 3은 수요일을 가리킴)
console.log(date.getHours()); // 시각
console.log(date.getMinutes()); // 분
console.log(date.getSeconds()); // 초
console.log(date.getMilliseconds());
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log('');

console.log(date.getTime()); // 1970년 1월 1일 자정으로부터 몇 ms가 지났는지 알려줌
// getTime() 이용하여 나눗셈을 하면 초,분,시,일 등의 단위로 변환 가능
console.log(date.getTime() + 'ms');
console.log(date.getTime()/1000 + '초'); // 1000ms -> 1초
console.log(date.getTime()/1000/60 + '분'); // 60초 -> 1분
console.log(date.getTime()/1000/60/60 + '시간'); // 60분 -> 1시간
console.log(date.getTime()/1000/60/60/24 + '일'); // 24시간 -> 1일
