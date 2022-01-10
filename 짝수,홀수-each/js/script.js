$('#even-btn').on('click',function(){
  $('.card').removeClass("selected"); // 모든 카드를 흰색으로 우선 만들어줌 (selected 클래스 추가하면 배경 파란색, 삭제하면 흰색으로 초기화)
  
  $('.card').each(function() { // each : 해당 요소에 해당하는 각 개체들 나타내줌 -> 각 카드에 대한 모든 객체들 
    if( Number($(this).text()) % 2 === 0) { // 카드의 대한 각각 개체들의 텍스트가 짝수면 (카드 요소들 전부 조사)
      $(this).addClass("selected");
    }
  })
})

$('#odd-btn').on('click',function(){
  $('.card').removeClass("selected"); // 마찬가지로 모든 카드 흰색으로 변경하고
  
  $('.card').each(function() { // 모든 카드 요소에 대해 조사
    if( Number($(this).text()) % 2 !== 0) { 
      $(this).addClass("selected");
    }
  })
})