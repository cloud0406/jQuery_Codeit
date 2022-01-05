// $('#home').on('click', clickHome);
// $('#seoul').on('click', clickSeoul);
// $('#tokyo').on('click', clickTokyo);
// $('#paris').on('click', clickParis);

// menu id에 있는 a 태그들에 관한 코드 이므로 아래와 같이 간소화 시킴
$('#menu a').on('click', selectMenu);


$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);

$(document).on('keydown', selectMenu);



// 사진을 바꿔주는 함수

// function clickHome() {
//   $('#photo').attr('src', 'images/home.png');

//   $('#home').css('font-weight', 'bold');
//   $('#seoul').css('font-weight', 'normal');
//   $('#tokyo').css('font-weight', 'normal');
//   $('#paris').css('font-weight', 'normal');
// }

// function clickSeoul() {
//   $('#photo').attr('src', 'images/seoul.png');

//   $('#home').css('font-weight', 'normal');
//   $('#seoul').css('font-weight', 'bold');
//   $('#tokyo').css('font-weight', 'normal');
//   $('#paris').css('font-weight', 'normal');
// }

// function clickTokyo() {
//   $('#photo').attr('src', 'images/tokyo.png');

//   $('#home').css('font-weight', 'normal');
//   $('#seoul').css('font-weight', 'normal');
//   $('#tokyo').css('font-weight', 'bold');
//   $('#paris').css('font-weight', 'normal');
// }

// function clickParis() {
//   $('#photo').attr('src', 'images/paris.png');

//   $('#home').css('font-weight', 'normal');
//   $('#seoul').css('font-weight', 'normal');
//   $('#tokyo').css('font-weight', 'normal');
//   $('#paris').css('font-weight', 'bold');
// }
function selectMenu(event) { // 
  let targetId = ''; 
  
  if (event.type === 'click') { // event 타입이 클릭 이벤트일 경우
    targetId = event.currentTarget.id; // currentTarget은 이벤트를 일어나도록 하는 요소를 나타냄
  } else if (event.type === 'keydown'){ // event 타입이 키보드 이벤트일 경우
    if (event.key === '1') {
      targetId = 'home';
    } else if (event.key==='2'){
      targetId = 'seoul';
    } else if (event.key === '3'){
      targetId = 'tokyo';
    } else if ( event.key === '4'){
      targetId = 'paris';
    }
  }
  $('#photo').attr('src', 'images/' + targetId + '.png'); // ex) home 링크를 클릭하면 targetID가 home이므로 사진이 home.png로 바뀌게 됨

  $('#menu a').css('font-weight', 'normal'); // menu id의 모든 a 태그들의 폰트 속성을 normal로 바꾸고
  $('#' + targetId).css('font-weight', 'bold'); // targetID에 해당하는 요소의 폰트 속성만 bold로 변경
}



// 사진에 그림자
function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}

function mouseLeavePhoto() {
  $('#photo').css('box-shadow', 'none');
}


// 키보드 이벤트 핸들링 - selectMenu 함수에 넣음
// function processKeyEvent(event) {
//   if (event['key'] === '1') {
//     clickHome();
//   } else if (event['key'] === '2') {
//     clickSeoul();
//   } else if (event['key'] === '3') {
//     clickTokyo();
//   } else if (event['key'] === '4') {
//     clickParis();
//   }
// }