$('#btn1').on('click',blueDown);
$('#btn2').on('click',whiteDown);
$('#btn3').on('click',blueDotDown);

// css파일 보면 flag클래스와 down 클래스를 모두 갖고 있는 요소들은 오른쪽으로 회전하게 설정되있음
// 따라서 버튼을 누르면 해당 버튼에 맞는 요소들에 down 클래스를 추가하여 회전시키도록 함
function blueDown() {
  $('.blue').addClass('down');
  // 'setTimeout'함수는 동작을 몇초 후에 실행되도록 사용자가 설정할 수 있음(기본적으로 내장되어있는 함수)
  setTimeout(reset,1000); // 1000ms = 1초,  후에 아래에 만들어둔 'reset'함수 실행하도록 설정
}

function whiteDown() {
  $('.white').addClass('down');
  setTimeout(reset,1000);
}

function blueDotDown() {
  $('.blue.dot').addClass('down');
  setTimeout(reset,1000);
}

// 버튼에 해당하는 깃발을 내린 후 다시 올려주는 함수
function reset() {
  $('.flag').removeClass('down');
}
