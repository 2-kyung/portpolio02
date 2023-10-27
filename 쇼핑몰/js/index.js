$(window).resize(function(){ 
  if (window.innerWidth > 900){


  $(function(){
    ////////////// 스크롤 이벤트 /////////////////////////
    $("body").on('mousewheel',function(e){
      var wheel = e.originalEvent.wheelDelta;
      if(wheel>0){
        //스크롤 올릴때
        $("#menu").slideDown();
      } else {
        //스크롤 내릴때
        $("#menu").slideUp();
      }
    });
  })
}
})

    
  $(function(){
    /////////// 맨위,맨아래로 가기 ////////////////////////////
    $('.top').click(function(){
      $('html').animate({scrollTop: '0'},1000)
    })
    
    $('.down').click(function(){
      $('html').animate({scrollTop: document.body.scrollHeight},1000)
    })
    
    
    //////////// 서브메뉴펼치기 /////////////////////////
    $('.x').hide()
    
    $('.menu').click(function(){
      $('#hide-menu').css('transform','translateX(0)')
      $('.x').fadeIn()
      $('.menu').fadeOut()
    })
    
    $('.x').click(function(){
      $('#hide-menu').css('transform','')
      $('.x').fadeOut()
      $('.menu').fadeIn()
    })


    ////// + 버튼 /////////
    $('#new button').click(function(){
        $('.hide').show()
    })

    ///// imgslide////
    $('#imgslide a:gt(0)').hide()
    setInterval(() => {
        $('#imgslide a:first-child')
        .fadeOut()
        .next('a')
        .fadeIn()
        .end()
        .appendTo('#imgslide')
    }, 2000);
})
