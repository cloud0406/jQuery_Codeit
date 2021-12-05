// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
// 대소문자 구분 없이 확인
function countCharacter(word, ch) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
      // 단어의 알파벳을 대문자로 바꾼 것과, 해당 특정 알파벳을 대문자로 바꾼게 같은지 비교
      // -> 둘다 대문자로 바꿔서 확인 하므로 대소문자 구분 없이 확인됨
      if (word[i].toUpperCase() === ch.toUpperCase()) { 
          count++;
      }
  }
  return count;
}

// 단어 word에 알파벳 'A' , 'a'가 몇 번 나오는지 세어주는 함수
function countA(word) {
  return countCharacter(word, 'A'); // 위에 만들어둔 함수 활용
}


console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));