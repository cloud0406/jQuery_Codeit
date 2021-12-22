$('#home').on('click', clickHome);
$('#seoul').on('click', clickSeoul);
$('#tokyo').on('click', clickTokyo);
$('#paris').on('click', clickParis);

$('#photo').on('mouseenter', mouseEnterPhoto);
$('#photo').on('mouseleave', mouseLeavePhoto);

$(document).on('keydown', processKeyEvent);

// 사진을 바꿔주는 함수
function clickHome() {
  $('#photo').attr('src', 'images/home.png');

  $('#home').css('font-weight', 'bold');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'normal');
}

function clickSeoul() {
  $('#photo').attr('src', 'images/seoul.png');

  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'bold');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'normal');
}

function clickTokyo() {
  $('#photo').attr('src', 'images/tokyo.png');

  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'bold');
  $('#paris').css('font-weight', 'normal');
}

function clickParis() {
  $('#photo').attr('src', 'images/paris.png');

  $('#home').css('font-weight', 'normal');
  $('#seoul').css('font-weight', 'normal');
  $('#tokyo').css('font-weight', 'normal');
  $('#paris').css('font-weight', 'bold');
}

// 사진에 그림자
function mouseEnterPhoto() {
  $('#photo').css('box-shadow', '5px 10px');
}

function mouseLeavePhoto() {
  $('#photo').css('box-shadow', 'none');
}

// 키보드 이벤트 핸들링
function processKeyEvent(event) {
  if (event['key'] === '1') {
    clickHome();
  } else if (event['key'] === '2') {
    clickSeoul();
  } else if (event['key'] === '3') {
    clickTokyo();
  } else if (event['key'] === '4') {
    clickParis();
  }
}