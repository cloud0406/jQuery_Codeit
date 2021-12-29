$('#btn1').on('click',blueDown);
$('#btn2').on('click',whiteDown);
$('#btn3').on('click',blueDotDown);

// css파일 보면 flag클래스와 down 클래스를 모두 갖고 있는 요소들은 오른쪽으로 회전하게 설정되있음
// 따라서 버튼을 누르면 해당 버튼에 맞는 요소들에 down 클래스를 추가하여 회전시키도록 함
function blueDown() {
  $('.blue').addClass('down');
}

function whiteDown() {
  $('.white').addClass('down');
}

function blueDotDown() {
  $('.blue.dot').addClass('down');
}
