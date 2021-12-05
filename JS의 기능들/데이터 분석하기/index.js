var birthdayData = [
  '20010309전소미',
  '19960828김세정',
  '19991112최유정',
  '19960209김청하',
  '19990719김소혜',
  '19981216주결경',
  '19971201정채연',
  '19991204김도연',
  '19991204강미나',
  '19951218임나영',
  '19990803유연정'
];

// 미성년자 (1999년생 부터 미성년자라 취급)만 따로 명단 출력해주는 함수
function printMinors(arr) {
    console.log("미성년자 명단:");

    for(let i=0; i<arr.length; i++){
      if(parseInt(arr[i].substring(0,4)) >= 1999){
        console.log(arr[i]);
      }
    }
}

printMinors(birthdayData);