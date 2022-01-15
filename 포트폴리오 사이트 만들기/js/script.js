function scrollHandler() {
  if ($(window).scrollTop() >= $('.about').position().top) { // 현재 브라우저의 스크롤 맨 윗부분이 about 섹션 밑으로 갈 경우 오른쪽 위의 메뉴바의 색깔을 변경해줌 
    $('.menu-right button').css('color','#4a4a4a');

    $('.skill').each(function(){ // each문이 모든 skill 클래스를 돌면서
      let skill = $(this); 
      let percentage = skill.find('.percentage').text(); // 해당 skill 클래스의 percentage 텍스트를 가져와서
      skill.find('.inner-bar').animate({width: percentage},1200); // inner-bar 클래스에 애니메이션 효과로 적용
    })
  } else { // 다시 윗부분으로 스크롤 이동할 경우 원래 색인 하얀색으로 변경
    $('.menu-right button').css('color','white');
  }


  // 현재 스크롤 위치가 해당 섹션보다 아래에 있으면 vertical-center를 애니메이션 효과 적용시킴
  $('section').each(function() { // 모든 섹션에 대하여
    if ($(window).scrollTop() >= $(this).position().top){ // 현재 스크롤 윗부분이 각 섹션의 윗부분보다 아래로 내려오게 될 경우 
      $(this).find('.vertical-center').animate({opacity:'1'},800); // 해당 섹션의 'vertical-center' 클래스의 투명도를 올려서 화면에 보이게끔 함
    }
  })
}

// 스크롤할때마다 위의 함수 실행
$(window).on('scroll',scrollHandler);

// 페이지 로딩 후 바로 한번 실행해줌 (밑부분에서 새로고침시 스크롤 하지 않아도 바로 색깔 변경시키기 위해)
scrollHandler();


// 섹션 스크롤
$('.menu-right button').on('click',function() { // 메뉴바 버튼 클릭시 함수 실행
  let id = $(this).attr('id'); // 클릭된 버튼의 id를 가져옴
  if (id == "about-btn"){ // about 버튼일 경우 
    $('html, body').animate({scrollTop: $('.about').position().top},1000); // 스크롤 맨 윗부분이 about 클래스의 섹션으로 1초 동안 이동
  } else if(id == "contact-btn") { // contact 버튼일 경우
    $('html, body').animate({scrollTop: $('.contact').position().top},1000); // 스크롤 맨 윗부분이 contact 클래스의 섹션으로 1초 동안 이동
  }
})

