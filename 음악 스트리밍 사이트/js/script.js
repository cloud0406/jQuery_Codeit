// 스크롤에 따라 플레이리스트 투명도 올려서 보여주는 함수
function scrollHandler() {
  // 브라우저의 맨 밑 위치 = 맨 위 위치 + 브라우저의 높이
  let windowBottom = $(window).scrollTop() + $(window).height();
  
  let playlists = $('.playlist'); // 플레이 리스트를 배열로 받음
  for (let i=0; i<playlists.length; i++){
    let playlist = $(playlists[i]);
    // 개별 플레이리스트의 중앙 위치 = 플레이리스트의 맨 위 위치 + (플레이리스트의 높이/2)
    // 브라우저 아닌 개별 요소의 맨 윗 부분 위치 : .position().top , 개별 요소의 높이 : .outerHeight()
    let playlistHalf = playlist.position().top + playlist.outerHeight() / 2; 
    
    // 현재 스크롤이 개별 플레이리스트의 절반 보다 많이 내려가 있을경우(스크롤이 내려갈때마다 windowBottom값이 커짐) 투명도를 올려서 보이게함
    if(playlistHalf < windowBottom) {
      playlist.animate({'opacity' : '1'}, 1500); // 1500ms = 1.5초 동안 애니메이션 효과
    }
  }


  if (windowBottom == $(document).height()) { // 스크롤이 브라우저 맨 밑으로 가게 되면
    $('.to-top-btn').fadeIn(); // 위로 가는 버튼이 보이게함
  } else { 
    $('.to-top-btn').fadeOut(); // 평소에는 버튼 안보이게 설정
  }
  
  // for문 대신 each로 구현 가능 - 아래 코드 참고

  // $('.playlist').each(function() {
  //   let playlist = $(this);
  //   let playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

  //   if(playlistHalf < windowBottom) {
  //     playlist.animate({'opacity' : '1'}, 1500);
  //   }
  // })
}

// 스크롤 할때마다 실행 (처음 페이지 로딩될때는 실행 안되므로 플레이리스트 안보이는 상태)
$(window).on('scroll',scrollHandler);

// 페이지 로딩되자마자 한번 실행해서 플레이리스트 보이게함
scrollHandler();


$('.to-top-btn').on('click',function() { // 맨 위로 스크롤 이동시켜주는 동작
  $('html, body').animate({scrollTop: 0}, 1000);
});