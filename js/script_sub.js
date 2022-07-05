$(function(){
  //수량추가
  var num = $(".num").attr("value");
  $(".arrowBtn > .up").click(function(){
    num++;
    if(num > 100){num = 100}
    $(".num").attr("value",num);
  });
  //수량감소
  $(".arrowBtn > .down").click(function(){
    num--;
    if(num <= 1){num = 1}
    $(".num").attr("value",num);
  });

  //pairing 드래그
  $(".perfumeDrag").on("mousewheel",function(e){
    e.preventDefault();
    var delta = e.originalEvent.deltaY
    var drag = document.querySelector(".perfumeDrag");
    var pos = drag.scrollLeft
    if(delta > 0){
      pos += 40; 
      drag.scrollLeft = pos
    }else{
      pos -= 40
      drag.scrollLeft = pos
    }
  });

  //window객체에 스크롤이벤트 발생시
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll > 20){
      $(".topbtn").css("display","block");
    }else{
      $(".topbtn").css("display","none");
    }
  });

  //top버튼 클릭시
  $(".topbtn").click(function(){
    $(window).scrollTop(0);
  })
});